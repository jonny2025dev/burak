import express from "express";
const router = express.Router();
import  membersController  from "./controllers/member.controller";

/** Member **/
router.post("/login", membersController.login);
router.post("/signup", membersController.signup);
router.post("/member/logout", membersController.verifyAuth, membersController.logout);
router.get("/member/detail", membersController.verifyAuth, membersController.getMemberDetail);

/** Product **/

/** Order **/

export default router;
