import mongoose from "mongoose";

const DealSchema = new mongoose.Schema({
    messageId: {type: Number , requried: true},
    title : {type: String},
    url: {type: String},
    source: {type: String},
    imagePath: {type: String},
    date: {type: String}

},{
  timestamps: true,
})

const dealModel = mongoose.model.deal ||  mongoose.model("deal" , DealSchema);

export default dealModel;
