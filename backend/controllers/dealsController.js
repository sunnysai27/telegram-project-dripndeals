import { message } from "telegram/client/index.js";
import dealModel from "../models/Deal.js";

export const getProductsList = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1; // Get page from query, default to 1
        const limit = parseInt(req.query.limit) || 20; // Get limit, default to 20
        const skip = (page - 1) * limit;

        const deals = await dealModel.find()
            .sort({ createdAt: -1 })
            .skip(skip) 
            .limit(limit);

        const totalDeals = await dealModel.countDocuments();

        res.json({
            success: true,
            deals, 
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalDeals / limit)
            }
        });

    } catch (err) {
        console.error("❌ Error fetching messages:", err);
        res.status(404).json({ success: false, error: "Internal Server Error" });
    }
}

export const getDealById = async (req, res) => {
    try {
        const id = req.params.id;
        const deal = await dealModel.findById(id);
        console.log(deal);
        if(productInfo) {
            res.json({success: true , deal});
        }
        else{
            res.status(500).json({success: false, message: "Product Not found" });
        }

        
    } catch (err) {
        console.error("❌ Error fetching messages:", err);
        res.status(500).json({success: false,  message: "Internal Server Error" });
    }
}