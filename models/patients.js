// create a Schema for patient
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },

    // create a Schema for reports
    reports: [
        {
            status: {
                type: String,
                enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"],
                required: true
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;