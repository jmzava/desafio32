import passport from 'passport'
import { Strategy } from 'passport-local'
import { Users } from '../models/users'
import { passCheck } from './passCheck'


passport.serializeUser((user, done) => {
    done(null, user)
})
  
passport.deserializeUser(async (id, done) => {
    const user: any = await Users.findById(id)  
    done(null, { _id: user._id, email: user.email })
})

passport.use(
    'local-signup',
    new Strategy(
      {
        usernameField: 'fieldEmail',
        passwordField: 'fieldPassword',
        passReqToCallback: true
      },
      async (req, fieldEmail, fieldPassword, done) => {
        try {
            const userExists = await Users.find({ email: fieldEmail })
            
          if (userExists.length > 0) {
           return done(null, false, { message: 'Email already exists' })
          } else {
            const newUser = new Users()
  
            newUser.email = fieldEmail
  
            newUser.password = newUser.encryptPassword(fieldPassword)
  
            await newUser.save()

            const userFromDatabase: any = await Users.findOne({ email: fieldEmail })
  
            done(null, {
              _id: userFromDatabase._id,
              email: userFromDatabase.email
            })
          }
        } catch (error) {
          console.error(error)
        }
      }
    )
)

passport.use(
    'local-signin',
    new Strategy(
      {
        usernameField: 'fieldEmail',
        passwordField: 'fieldPassword',
        passReqToCallback: true
      },
      async (req, fieldEmail, fieldPassword, done) => {
        try {
          const user = await Users.findOne({ email: fieldEmail })
          if (user === null) {
            return done(null, false, { message: 'User not found' })
          } else if (!passCheck(fieldPassword, user.password)) {
            return done(null, false, { message: 'Wrong password' })
          } else {
            return done(null, { _id: user._id, email: user.email })
          }
        } catch (error) {
          console.log(error)
        }
      }
    )
)