

import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bycrpt from 'bcrypt'
import validator from 'validator'


const createToken = (id) => jwt.sign({ id }, process.env.JWT_TOKEN)


const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            res.json({ success: false, message: "User not found" })
        }
        const isMatch = bycrpt.compare(password, user.password)
        if (!isMatch) {
            res.json({ success: false, message: "password incorrect" })
        }
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ scuccess: false, message: "Error" })
    }
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const exists = await userModel.findOne({ email })
        if (exists) {
            res.json({ success: false, message: "User already exists" })
        }
        if (!validator.isEmail(email)) {
            res.json({ success: false, message: "Email is not valid" })
        }
        if (password.length < 8) {
            res.json({ success: false, message: 'Please Enter Strong Password' })
        }
        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bycrpt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })
        const user = newUser.save()
        const token = createToken(user._id)
        res.json({ scuccess: true, token })
    } catch (error) {
        res.json({ scuccess: false, message: "Error" })
    }
}

export { loginUser, registerUser }