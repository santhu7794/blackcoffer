const express =require("express")
const mongoose = require("mongoose");
const blackroute = require("./routes/blackRoutes.js");
const adminRoute = require("./routes/adminRoutes.js");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
let corsOptions = {
  orgin: ["http://localhost:4200"],
};
const port = 4200;
url = "mongodb://localhost:27017/Mydatabase";
app.listen(port, () => {
  console.log("server is running", port);
});
mongoose
  .connect(url)
  .then(console.log("data base is connected"))
  .catch((err) => {
    console.log("data base is not connected");

  });
app.use("/black", cors(corsOptions), blackroute);
app.use("/admin", cors(corsOptions), adminRoute);
