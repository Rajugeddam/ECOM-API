# hospital_Api
API has been created for the doctor which has allocated by the govt. for the testing quarantine as well as being of covid-19 patients.

## Installation

Install my-project with npm

```bash
    git clone https://github.com/amit-vis/hospital_Api.git
    npm install
    cd hospital_Api
```

## Running Tests

To run tests, run the following command
```bash
    npm start
```

## Routes
    1. Register a Doctor: [post]: /api/v1/doctor/register
    2. Login a Doctor: [post]: /api/v1/doctor/create-session
    3. Register a Patients: [post]: /api/v1/patient/register
    4. create a reports: [post]: /api/v1/patient/:id/create_reports
    5. Get all Reports: [get]: /api/v1/patient/:id/all_reports
    6. Get all Status: [get]: /api/v1/patient/reports/:status

## Folder Structure
* config
    - mongoose.js
    - passport_Jwt_stratergy.js
* controllers
    * api
        * v1
            - doctor_controller.js
            - patient_controller.js
* models
    - doctor.js
    - patients.js
* routes
    * api
        * v1
            - doctor.js
            - index.js
            - patient.js
        - index.js
    - index.js
- index.js
- .gitignore
- index.js
- package-lock.json
- package.json