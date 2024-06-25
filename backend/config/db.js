import mongoose from "mongoose";

export const mongoDB = async () => {
  await mongoose.connect(
    `mongodb+srv://waleedbinkhalidch:mernfood@cluster0.nsxn1eo.mongodb.net/mern-food`
  ).then(()=>console.log('DB connected'));
};
