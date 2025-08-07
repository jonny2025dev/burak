import { memberStatus } from "./../libs/enums/member.enum";
import MemberModel from "../schema/Member.model";
import {
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../libs/types/member";
import Errors from "../libs/Errors";
import { HttpCode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { memberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";

class MemberService {
  // updateMember() {
  //   throw new Error("Method not implemented.");
  // }
  private readonly memberModule;
  constructor() {
    this.memberModule = MemberModel;
  }
  /* SPA */
  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    try {
      const result = await this.memberModule.create(input);
      result.memberPassword = "";
      return result.toJSON();
    } catch (err) {
      console.error("Error, model:signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    const member = await this.memberModule
      .findOne(
        {
          memberNick: input.memberNick,
          memberStatus: { $ne: memberStatus.DELETE },
        },
        { memberNick: 1, memberPassword: 1, memberStatus: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    else if (member.memberStatus === memberStatus.BlOCK) {
      throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
    }
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModule.findById(member._id).lean().exec();
  }

  public async getMemberDetail(member: Member): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const result = await this.memberModule.findOne({_id: memberId, memberStatus: memberStatus.ACTIVE}).exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async updateMember(
    member:Member,
    input: MemberUpdateInput
  ): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const result = await this.memberModule 
      .findByIdAndUpdate({_id: memberId }, input, {new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  }

  public async getTopUsers(): Promise<Member[]> {
    const result = await this.memberModule
      .find ({
         memberStatus: memberStatus.ACTIVE, 
         memberPoints: { $gte: 1 }
       })
      .sort({ memberPoints: -1 })
      .limit(4)
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND) ;
   
    return result;
  }

  /* SSR */
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModule
      .findOne({ memberType: memberType.RESTAURANT })
      .exec();

    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    console.log("before:", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after:", input.memberPassword);

    try {
      const result = await this.memberModule.create(input);

      // const tempResult = new this.memberModule(input);
      // const result = await tempResult.save();

      result.memberPassword = "";

      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModule
      .findOne(
        { memberNick: input.memberNick },
        {
          memberNick: 1,
          memberPassword: 1,
        }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    // const isMatch = input.memberPassword === member.memberPassword;

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModule.findById(member._id).exec();
  }

  public async getUsers(): Promise<Member[]> {
    const result = await this.memberModule
      .find({ memberType: memberType.USER })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
    input._id = shapeIntoMongooseObjectId(input._id);
    const result = await this.memberModule
      .findByIdAndUpdate({ _id: input._id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  }

}

export default MemberService;
