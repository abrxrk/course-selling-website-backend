import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.json({ message: "token missing" });
    return
  }
  const decodedUser = jwt.verify(token , process.env.JWT_USER_PASSWORD)
  if(!decodedUser){
    res.json({message:"user not found"})
    return
  }
  req.user = decodedUser
  next()
};
