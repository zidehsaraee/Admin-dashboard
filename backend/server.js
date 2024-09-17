require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const productsRouter = require("./routes/productsRoutes");
const commentsRouter = require("./routes/commentsRoutes");
const usersRouter = require("./routes/usersRoutes");
const ordersRuter = require("./routes/ordersRoutes");
const adminsRouter = require("./routes/adminsRouts");
const offsRouter = require("./routes/offsRoutes");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const PORT = process.env.PORT || 5000;
// const PORT = 5000;

const upload = multer({ storage: storage });

app.use(cors());

app.use(cors({
  origin: 'https://guileless-bienenstitch-e1cc73.netlify.app/', // Change to your actual Netlify URL
  credentials: true
}));

//Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the stack trace
  res.status(500).send({ error: "Something went wrong!" });
});


app.use(bodyParser.json());
// 
app.use("/api/products", productsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRuter);
app.use("/api/admins", adminsRouter);
app.use("/api/offs", offsRouter);
app.use("/uploads", express.static("uploads"));
app.use("/api/products", upload.single("image"), productsRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
// app.listen(PORT, console.log('Server is running on port 5000'));
