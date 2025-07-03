import express  from "express";
const router = express.Router();
import memberConroller from "./controllers/member.controller";

router.post("/login", memberConroller.login);
router.post("/signup", memberConroller.signup);

export default router;
