import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
    githubRepo: {
        type: String,
    },
    public_id: {
        type: String,
    },
    url: {
        type: String  
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clients",
        required: true
    },
    developerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "developers",
        required: true
    }
});

const Delivery = mongoose.models.deliverys || mongoose.model("deliverys", deliverySchema);

export default Delivery;