import * as controllers from "../controllers/userControllers.js";
import express from "express";
import { validate } from "../middlewares/authenticateMiddleware.js";

const routes = express.Router();

routes.post("/", controllers.createUser);
routes.get("/", controllers.getUsers);
routes.post("/login", controllers.login);
routes.get("/me", validate, controllers.getMe);
routes.post("/:id", controllers.editUser);
routes.get("/:id", controllers.getUser);

export default routes;
