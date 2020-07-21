const express = require("express");
const cors = require('cors')
const userRoutes = require("./routes/userRoutes");
const albumRoutes = require("./routes/albumRoutes");

const mongoose = require("mongoose");
const config = require("config");
const app = express();

app.use(cors())

app.use(express.json());

app.use("/album", albumRoutes);
app.use("/user", userRoutes);

const db = config.get("Database");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .then((err) => {
    err ? console.log(err) : "No errors";
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Iniciou no port " + PORT));
