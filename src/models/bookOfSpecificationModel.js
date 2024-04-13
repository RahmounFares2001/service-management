import mongoose from "mongoose";

const bookOfSpecificationSchema = new mongoose.Schema({
    public_id: {
        type: String,
    },
    url: {
        type: String  
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects",
        required: true
    },
});

const BookOfSpecification = mongoose.models.bookOfSpecification || mongoose.model("bookOfSpecification", bookOfSpecificationSchema);

export default BookOfSpecification;


// filename: {
//     type: String,
// },
// mimetype: {
//     type: String  
// },
// size: {
//     type: String  
// },
// path: {
//     type: String
// },
// uuid: {
//     type: Boolean,
//     default: false
// },