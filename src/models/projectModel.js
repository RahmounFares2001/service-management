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
        default: 'Waiting for approve'
    },
    deadline: {
        type: Date,
        default: '3 Month'
    },
    developerProgression: {
        type: String,
        default: 'pending'
    },
    statuss: {
        type: String,
        default: 'pending'
    },
    taken: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clients",
        required: true
    },
    developerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects",
    }
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;