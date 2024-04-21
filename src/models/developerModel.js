import mongoose from "mongoose";


const developerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'developer'
    },
    status: {
        type: Boolean,
        default: false
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Developer = mongoose.models.developers || mongoose.model("developers", developerSchema);


export default Developer;