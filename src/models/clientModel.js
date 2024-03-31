import mongoose from "mongoose";
import User from "./userModel";

const clientSchema = new mongoose.Schema({
    surname: {
        type: String,
        default: 'surname'
    },
    phoneNumber: {
        type: String  
    },
    adress: {
        type: String
    },
    appartment: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipCode: {
        type: String
    },
    country: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user" 
    },
});

const Client = mongoose.models.clients || mongoose.model("clients", clientSchema);

export default Client;


// const Client = User.discriminator('client', clientSchema);


// Access the username field of the associated user document
// const username = client.user.username;