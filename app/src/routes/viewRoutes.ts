import { Router } from "express"
import { isAuth } from '../middlewares/authCheck'
import viewsController from '../controllers/viewsController'
import { myLogger2 } from "../middlewares/logger"

const routes = Router()

routes.get('/', viewsController.login)
routes.get('/signInError', viewsController.loginError)
routes.get('/signUpError', viewsController.signupError)
routes.get('/signUpOk', viewsController.signupOk)
routes.get('/logout', viewsController.logout)

routes.get('/products', isAuth, viewsController.productsView )

routes.get('/info', myLogger2, viewsController.info)
routes.get('/info2', myLogger2, viewsController.info2)


export default routes