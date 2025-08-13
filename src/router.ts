import express from "express";
const router = express.Router();
import  membersController  from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";
import memberController from "./controllers/member.controller";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";
/** Member **/
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", membersController.login);
router.post("/member/signup", membersController.signup);
router.post(
    "/member/logout",
     membersController.verifyAuth,
      membersController.logout
 ); 
router.get(
    "/member/detail",
     membersController.verifyAuth,
      membersController.getMemberDetail
);

router.post(
  "/member/update",
  membersController.verifyAuth, 
  uploader("members").single("memberImage"),
  membersController.updateMember  
);

router.get("/member/top-users", memberController.getTopUsers);

/** Product **/ 
router.get("/product/all", productController.getProducts);
router.get(
    "/product/:id", 
    memberController.retrieveAuth,
     productController.getProduct);

/** Order **/
router.post(
  " /order/create",
     memberController.verifyAuth,
    orderController.create0rder
);

export default router;
