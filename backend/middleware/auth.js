import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const decode_token = jwt.verify(token, process.env.JWT_TOKEN);
    req.body.userId = decode_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
