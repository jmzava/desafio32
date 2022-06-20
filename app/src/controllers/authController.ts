import {Request , Response } from 'express'

class AuthController{  

    logout (req:Request, res:Response)  {
        //@ts-ignore
        const nombre = req.session.passport.user.email
        req.session.destroy(function (err:any) {
            res.render('login/logout', {nombre: nombre })
        });
    }
    
}

export default new AuthController()