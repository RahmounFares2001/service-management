import mongoose from "mongoose";

// user
import User from "./userModel";

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

// const Admin = User.discriminator('admins', adminSchema);

export default Admin;