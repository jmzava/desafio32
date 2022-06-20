import express from 'express'
import session from 'express-session'
import passport from 'passport'
import MongoStore from 'connect-mongo'
import './middlewares/passport'
import 'dotenv/config'
import viewsRoute from './routes/viewRoutes'
import authRoute from './routes/authRoutes'
import randomRoute from './routes/randomRoutes'
import {connectMongo} from './db/dbConnect'
import compression from "compression"
import './models/logs4js'
import log4js from './models/logs4js'
import { myLogger } from './middlewares/logger'

const app = express()
const logger = log4js.getLogger()

connectMongo()

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO,
    }),
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: Number(process.env.TIME_COOKIE)
    }
}))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())
app.use(compression())

app.use(myLogger)

app.use('/api/', randomRoute)
app.use('/api/auth', authRoute)
app.use('/', viewsRoute)

export default app