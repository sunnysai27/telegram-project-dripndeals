import express from "express";
import { getProductsList, getMessageInfo } from "../controllers/dealsController.js";

const dealsRouter = express.Router();

dealsRouter.get("/" , getProductsList);
dealsRouter.get("/:messageId" , getMessageInfo)


export default dealsRouter;