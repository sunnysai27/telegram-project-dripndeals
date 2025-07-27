import express from "express";
import { getProductsList, getDealById, getFilteredDeals } from "../controllers/dealsController.js";

const dealsRouter = express.Router();

dealsRouter.get("/list" , getProductsList);
dealsRouter.get("/deal/:id" , getDealById);
dealsRouter.get('/:source' , getFilteredDeals )


export default dealsRouter;