import { Request, Response } from "express";
import { T }  from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/errors";

//REACT UCHUN  

const memberService = new MemberService();

const memberConroller: T = {}; 

memberConroller.signup =  async (req: Request, res: Response) => {
    try{
      console.log("signup");
      const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
  
         //TODO Token Authentications

      res.json({ member: result });
    } catch (err) {
      console.log("Error, Signup:", err);
      if(err instanceof Errors) res.status(err.code).json(err);
      else res .status(Errors.standard.code).json(Errors.standard);
    }
  };


memberConroller.login = async (req: Request, res: Response) => {
  try{
    console.log("login ");
    console.log("body:", req.body);
    const input: LoginInput = req.body,
      result = await memberService.login(input);

      //TODO Token Authentications
    res.json({ member: result });
  } catch (err) {
    console.log("Error, Login:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res .status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberConroller;