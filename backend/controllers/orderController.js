import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.user._id,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const lineItems = req.body.items.map((item) => {
      return {
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.name,
          },
          unit_currency: item.amount * 100 * 280,
        },
        quantity: item.quantity,
      };
    });
    lineItems.push({
      price_data: {
        currency: "pkr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 289,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `http://localhost:5173/verify?success=false&orderId=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    res.json({ success: false, message: 'Error' });
  }
};

export { placeOrder };
