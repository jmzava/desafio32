import { Router } from "express"
import randomController from "../controllers/randomController"

const routes = Router()
//@ts-ignore

routes.get("/randoms", randomController.randoms);

export default routes