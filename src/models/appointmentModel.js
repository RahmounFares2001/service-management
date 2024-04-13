import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please provide a type"],
    },
    date: {
        type: Date,
        required: [true, "Please provide a date"],
    },
    informations: {
        type: String,
        required: [true, "Please provide a type"],
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
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
});

const Appointment = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema);

export default Appointment;