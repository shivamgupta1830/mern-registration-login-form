import jwt from "jsonwebtoken";
const authUser = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      return res.json({ status: false, msg: "No user token!" });
    }
    const verify = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verify) next();
  } catch (error) {
    return res.json({ error });
  }
};

export default authUser;
