const path = require("path");
//multer packages and middlewares...........
const multer = require("multer");
var jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + originalExtension);
  },
});
const upload = multer({ storage: storage });

//.........................
function generateToken(user) {
  const secret = "secretKey";
  const token = jwt.sign(
    {
      data: user,
    },
    secret,
    { expiresIn: "3h" }
  );
  return token;
}

function verifyToken(req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    const token = req.body.token;

    jwt.verify(token, "secretKey", (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          error: "Invalid token",
          message: "email or password is incorrect",
        });
      }

      req.user = decoded;

      next();
    });
  } else {
    res.json({ success: false, msg: "user not authorized" });
  }
}
module.exports = { upload, generateToken, verifyToken };
