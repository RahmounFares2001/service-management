import mongoose from "mongoose";

// user
import User from "./userModel";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'admin'
    }
});

const Admin = User.discriminator('admins', adminSchema);

export default Admin;