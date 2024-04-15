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
    progression: {
        type: String,
    },
    statuss: {
        type: String,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clients",
        required: true
    },
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;