const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function postUser(req, res) {
  const { username, email, password, phone, city, zip } = req.body;

  const checkingUser = await User.findOne({ email: email });

  if (checkingUser) {
    return res.send("user already exist");
  }

  const saltround = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, saltround);
  const user = await User.create({
    username,
    email,
    phone,
    password: hashed,
    city,
    zip,
    role: "seller",
  });
  res.send("user added success");
  console.log(user);
}

// async function userLogin(req, res) {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email: email });

//   if (!user) {
//     return res.send("user not found");
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     return res.send("invalid password");
//   }

//   if (req.cookies && req.cookies.token) {
//     return res.send("user already logged in");
//   }
//   const token = jwt.sign(
//     {
//       name: user.name,
//       email: user.email,
//       _id: user._id,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "1h",
//     }
//   );

//   console.log("token>>>>>>>", token);

//   res.cookie("token", token, {
//     httpOnly: true,
//     secure: true,
//     sameSite: "strict",
//   });

//   res.send("login success");
// }


async function userLogin(req, res){
  const { email, password } = req.body;

  const userDetail = await User.findOne({ email: email });

  if (userDetail) {
    if (await bcrypt.compare(password, userDetail.password)) {
      res.send(userDetail);
    } else {
      res.send({ error: "invaild Password" });
    }
  } else {
    res.send({ error: "user is not exist" });
  }
};

module.exports = { postUser, userLogin };