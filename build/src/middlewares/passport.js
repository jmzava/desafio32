"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const users_1 = require("../models/users");
const passCheck_1 = require("./passCheck");
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.Users.findById(id);
    done(null, { _id: user._id, email: user.email });
}));
passport_1.default.use('local-signup', new passport_local_1.Strategy({
    usernameField: 'fieldEmail',
    passwordField: 'fieldPassword',
    passReqToCallback: true
}, (req, fieldEmail, fieldPassword, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExists = yield users_1.Users.find({ email: fieldEmail });
        if (userExists.length > 0) {
            return done(null, false, { message: 'Email already exists' });
        }
        else {
            const newUser = new users_1.Users();
            newUser.email = fieldEmail;
            newUser.password = newUser.encryptPassword(fieldPassword);
            yield newUser.save();
            const userFromDatabase = yield users_1.Users.findOne({ email: fieldEmail });
            done(null, {
                _id: userFromDatabase._id,
                email: userFromDatabase.email
            });
        }
    }
    catch (error) {
        console.error(error);
    }
})));
passport_1.default.use('local-signin', new passport_local_1.Strategy({
    usernameField: 'fieldEmail',
    passwordField: 'fieldPassword',
    passReqToCallback: true
}, (req, fieldEmail, fieldPassword, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.Users.findOne({ email: fieldEmail });
        if (user === null) {
            return done(null, false, { message: 'User not found' });
        }
        else if (!(0, passCheck_1.passCheck)(fieldPassword, user.password)) {
            return done(null, false, { message: 'Wrong password' });
        }
        else {
            return done(null, { _id: user._id, email: user.email });
        }
    }
    catch (error) {
        console.log(error);
    }
})));
