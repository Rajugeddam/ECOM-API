// require all the required module
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');

// here is code for JWT authentication
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospital'
}

passport.use(new JWTStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await Doctor.findById(jwt_payload._id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.log("Error in finding user in jwt", err);
        return done(err, false);
    }
}));

module.exports = passport;
