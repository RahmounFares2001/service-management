import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'admin'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});

const Admin = mongoose.models.admins || mongoose.model("admins", adminSchema);

export default Admin;