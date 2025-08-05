import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/* RESTURANT */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/* Product */
routerAdmin.get(
  "/product/all",
  restaurantController.verifyResturant,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyResturant,
  makeUploader("products").array("productImage", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyResturant,
  productController.updateChosenProduct
);

/* USER */
routerAdmin.get(
  "/user/all",
  restaurantController.verifyResturant,
  restaurantController.getUsers
);

routerAdmin.post(
  "/user/edit",
  restaurantController.verifyResturant,
  restaurantController.updateChosenUser
);
export default routerAdmin;
