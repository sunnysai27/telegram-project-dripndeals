import { message } from "telegram/client/index.js";
import dealModel from "../models/Deal.js";

export const getProductsList = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1; // Get page from query, default to 1
        const limit = parseInt(req.query.limit) || 100; // Get limit, default to 20
        const skip = (page - 1) * limit;

        const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
        const query = {
            createdAt: { $gt: fortyEightHoursAgo }
        };

        const deals = await dealModel.find(query)
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
        if(deal) {
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

export const getFilteredDeals = async (req, res) => {
    const limit = 100;
    try {
        const source = req.params.source;
        const deals = await dealModel.find({source})
            .sort({ createdAt: -1 })
            .limit(limit);
        // console.log(deals);
        if(deals) {
            res.json({success: true , deals});
        } else {
            res.status(500).json({success: false, message: "Products Not found" });
        }

    } catch (error) {
        console.error("❌ Error fetching messages:", err);
        res.status(500).json({success: false,  message: "Internal Server Error" });
    }
}