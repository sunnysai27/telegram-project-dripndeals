import mongoose from "mongoose";

const DealSchema = new mongoose.Schema({
    messageId: {type: Number , requried: true, unqiue: true, index: true},
    title : {type: String , requried: true, trim: true},
    url: {type: String , requried : true},
    source: {type: String , requried: true},
    isLoot: { type: Boolean , default: false},
    discount: {type: String},
    imagePath: {type: String},
    date: {type: String , requried: true}
}, {
  timestamps : true
})

const dealModel = mongoose.model.deal ||  mongoose.model("deal" , DealSchema);

export default dealModel;
