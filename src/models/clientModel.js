import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    surname: {
        type: String
    },
    phoneNumber: {
        type: String  
    },
    status: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
});

const Client = mongoose.models.clients || mongoose.model("clients", clientSchema);

export default Client;