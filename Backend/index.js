import express from "express";
import connected from "./DBConnection/Connection.js";
import Bookapp from "./Routes/BooksRoutes.js";
import cors from "cors";
import Userapp from "./Routes/UserRoutes.js";
import Singuprouter from "./Routes/Singup.js";
import Loginrouter from "./Routes/Login.js";

const app = express();
const PORT = 3321;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("kapil");
});

app.use("/api", Bookapp);
app.use("/user", Userapp);
app.use("/usersignup", Singuprouter);
app.use("/userLogin", Loginrouter);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
