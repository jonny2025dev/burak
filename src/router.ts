import express from "express";
const router = express.Router();
import  membersController  from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

/** Member **/
router.post("/member/login", membersController.login);
router.post("/member/signup", membersController.signup);
router.post("/member/logout", membersController.verifyAuth, membersController.logout);
router.get("/member/detail", membersController.verifyAuth, membersController.getMemberDetail);

router.post(
  "/member/update",
  membersController.verifyAuth, 
  uploader("members").single("memberImage"),
  membersController.updateMember
    
);

/** Product **/

/** Order **/

export default router;
