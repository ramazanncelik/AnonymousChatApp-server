import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    From: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    FullDate: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Month: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Message', MessageSchema);