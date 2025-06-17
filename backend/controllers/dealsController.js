import dealModel from "../models/Deal.js";

export const getProductsList = async (req, res) => {
    try {
        const messages = await dealModel.find()
        .sort({ createdAt: -1 })
        // .limit(20); // Adjust limit as needed
        res.json({success: true , messages});

    } catch (err) {
        console.error("❌ Error fetching messages:", err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

export const getMessageInfo = async (req, res) => {
    try {
        const id = req.params.messageId;
        const productInfo = await dealModel.findOne({messageId : id});
        console.log(productInfo)
        if(productInfo) {
            res.json({success: true , info:productInfo});
        }
        else{
            res.status(500).json({success: false, error: "Product Not found" });
        }

        
    } catch (err) {
        console.error("❌ Error fetching messages:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}