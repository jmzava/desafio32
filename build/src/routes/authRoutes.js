"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
require("../middlewares/passport");
const routes = (0, express_1.Router)();
routes.post('/register', passport_1.default.authenticate('local-signup', {
    successRedirect: '/signUpOk',
    failureRedirect: '/signUpError',
    passReqToCallback: true,
    failureMessage: true
}));
routes.post('/signin', passport_1.default.authenticate('local-signin', {
    successRedirect: '/products',
    failureRedirect: '/signInError',
    passReqToCallback: true,
    failureMessage: true
}));
exports.default = routes;
