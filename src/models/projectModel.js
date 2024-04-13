import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String  
    },
    package: {
        type: String  
    },
    status: {
        type: String,
        default: 'pending'
    },
    progression: {
        type: String,
        default: 'pending'
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clients",
        required: true
    },
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;