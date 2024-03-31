import mongoose from "mongoose";
import Client from "./clientModel";

const clientAdressSchema = new mongoose.Schema({
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
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client" 
    },
});

const ClientAdress = mongoose.models.clients || mongoose.model("clientAdress", clientAdressSchema);

export default Client;


// const Client = User.discriminator('client', clientSchema);


// Access the username field of the associated user document
// const username = client.user.username;