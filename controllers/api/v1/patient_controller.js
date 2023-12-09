const Patient = require('../../../models/patients');

// register the patient
module.exports.createPatient = async function (req, res) {
    try {
        let patient = await Patient.findOne({ phone: req.body.phone });
        if (patient) {
            return res.status(200).json({
                success: true,
                body: patient,
                message: "User is already registered"
            })
        } else {
            patient = await Patient.create(req.body);
            patient.save();
        }
        return res.status(200).json({
            success: true,
            body: patient,
            message: "Patient is register successfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// create the reports
module.exports.createReport = async function(req, res){
    try {
        let patient = await Patient.findById(req.params.id);
        req.body.date = Date.now();
        patient.reports.push(req.body);
        patient.save()
        return res.status(200).json({
            success: true,
            body: patient,
            message: "Reports Created successfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            message: "internal server Error"
        })
    }
}

// get all reports
module.exports.allReports= async function(req, res){
    try {
        let allReports = await Patient.findById(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Find the all reports",
            body: allReports.reports

        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            message: "internal server Error"
        })
    }
}

// get reports status wise
module.exports.getStatus = async function(req, res){
    try {
        let status = await Patient.find({reports: {$elemMatch: {status: req.params.status}}})
        return res.status(200).json({
            success: true,
            message: "Findt the status",
            body: status
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            message: "internal server Error"
        })
    }
}