import mongoose from 'mongoose'

export function connectMongo () {
  try {
    // @ts-ignore
    mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.log(error)
  }
}
