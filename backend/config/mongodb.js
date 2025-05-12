import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected" , () => {
            console.log("DB connected successfull");
        })

        await mongoose.connect(`${process.env.MONGODB_URI}/telegram`);
    }catch (error) {
        console.log("❌ MongoDB connection failed:", error.message)
    }
    
}

export default connectDB;
