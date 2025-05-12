import express from "express";
import { getProductsList } from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/" , getProductsList)

export default homeRouter;