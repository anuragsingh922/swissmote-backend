const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const { connectToDatabase } = require("./databaseConnection/db");
// const helmet = require("helmet");
const { rateLimit } = require('express-rate-limit');
const { setupSocket } = require("./socket/socket");

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cookieParser());
// app.use(helmet());
// const limiter = rateLimit({
//   windowMs: 1000,
//   limit: 50,
//   standardHeaders: 'draft-8',
//   legacyHeaders: false,
// })

// app.use(limiter)

const corsOption = {
  origin: ["http://localhost:3000" , "https://swissmote-922.vercel.app"],
  credentials: true,
  exposedHeaders: ["Set-Cookie"]
}
app.use(cors(corsOption));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 8080;
connectToDatabase();

app.get("/", (req, res) => {
  res.status(200).send("shopease server working fine.");
})
setupSocket(server);

const v1_routes = require("./routes/v1.routes");

app.use("/api/v1", v1_routes);

server.listen(PORT, () => {
  console.log(`Swissmote backend Listining on http://localhost:${PORT}`);
});
