// routes for a patient
const express = require('express');

const router = express.Router();

const patientController = require('../../../controllers/api/v1/patient_controller');
const passport = require('passport');

router.post('/register',passport.authenticate('jwt', {session: false}), patientController.createPatient);
router.post('/:id/create_reports',passport.authenticate('jwt', {session: false}), patientController.createReport);
router.get('/:id/all_reports', patientController.allReports);
router.get('/reports/:status', patientController.getStatus);

module.exports = router;