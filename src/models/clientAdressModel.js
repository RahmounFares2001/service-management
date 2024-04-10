import mongoose from "mongoose";


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
        ref: "clients",
        required: true
    },
});

const ClientAdress = mongoose.models.ClientAdress || mongoose.model("ClientAdress", clientAdressSchema);

export default ClientAdress;

// type: mongoose.Schema.Types.ObjectId,
