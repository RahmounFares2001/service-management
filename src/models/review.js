import mongoose from "mongoose";

const reveiwSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects",
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clients",
        required: true
    },
    developerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "developers",
    }
});

const Review = mongoose.models.reviews || mongoose.model("reviews", reveiwSchema);

export default Review;