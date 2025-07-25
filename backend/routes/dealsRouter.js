import express from "express";
import { getProductsList, getDealById } from "../controllers/dealsController.js";

const dealsRouter = express.Router();

dealsRouter.get("/list" , getProductsList);
dealsRouter.get("/:id" , getDealById)


export default dealsRouter;