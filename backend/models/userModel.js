import moongoose from 'mongoose'

const userSchema = new moongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    cartData: { type: Object, default: {} }
})


const userModel = moongoose.models.user || moongoose.model('user', userSchema)
export default userModel