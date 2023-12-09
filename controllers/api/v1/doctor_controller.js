const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

// register the doctor
module.exports.registerDoctor = async function(req, res){
    try {
        let createDoctor = await Doctor.findOne({email: req.body.email});
        if(!createDoctor){
            await Doctor.create(req.body)
        }
        res.status(200).json({
            success: true,
            body: createDoctor,
            message: "Doctor register succesfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            message: "Internal server Error"
        })
    }
}

// login the doctor
module.exports.createSession = async function(req, res){
    try {
        let findDoctor = await Doctor.findOne({email: req.body.email});
        if(!findDoctor || findDoctor.password !== req.body.password){
            return res.status(422).json({
                message: "Invalid user name or password"
            })
        }
        return res.status(200).json({
            success: true,
            message: "sign in successfully, here is the token",
            data:{
                token: jwt.sign(findDoctor.toJSON(), 'hospital')
            }
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}
