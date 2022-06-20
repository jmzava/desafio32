import { Router, Request, Response  } from "express";
import passport from 'passport';
import '../middlewares/passport';
import authController from "../controllers/authController";
const routes = Router();

routes.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/signUpOk',
    failureRedirect: '/signUpError',
    passReqToCallback: true,
    failureMessage: true
}))

routes.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/products',
    failureRedirect: '/signInError',
    passReqToCallback: true,
    failureMessage: true
}))



export default routes