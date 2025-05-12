import dealModel from "../models/Deal.js";

const getProductsList = async (req, res) => {
    try {
        const messages = await dealModel.find()
        .sort({ createdAt: -1 })
        .limit(20); // Adjust limit as needed
        res.json(messages);

    } catch (err) {
        console.error("❌ Error fetching messages:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export {getProductsList};