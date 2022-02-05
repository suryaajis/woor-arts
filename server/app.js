const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router)

app.listen((_) => console.log("This server listening on port", port));
