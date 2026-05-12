// console.log("hello node js");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json())


const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.listen(5000, () => {
    console.log("Server executed on http://localhost:5000");
});