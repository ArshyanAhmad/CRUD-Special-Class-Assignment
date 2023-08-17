import { model, Schema } from 'mongoose'

const userSchema = Schema({

})

const userModel = model('User', userSchema)
export default userModel;