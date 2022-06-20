"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    logout(req, res) {
        //@ts-ignore
        const nombre = req.session.passport.user.email;
        req.session.destroy(function (err) {
            res.render('login/logout', { nombre: nombre });
        });
    }
}
exports.default = new AuthController();
