import mongoose from 'mongoose';

const visaCardModel = new mongoose.Schema({
    cardNumber: {
        type: String
    },
    expirationdate: {
        type: Date
    },
    ccv: {
        type: String
    },
    holderName: {
        type: String
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

const VisaCard = mongoose.models.visaCards || mongoose.model('visaCards', visaCardModel);

export default VisaCard;