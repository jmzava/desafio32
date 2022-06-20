import bcrypt from 'bcrypt'
export const passCheck = (passwordToCheck: string, dbPassword:string) => {
  return bcrypt.compareSync(passwordToCheck, dbPassword)
}
