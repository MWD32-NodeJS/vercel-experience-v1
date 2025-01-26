import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

const port = parseInt(process.env.PORT) || 3000;

app.get("/", (req, res) => 
  res.send(bcrypt.genSaltSync(parseInt(req.query.rounds) || 10))
);

app.get("/hash", (req, res) => 
  res.send(bcrypt.hashSync(req.query.password, req.query.salt || 10))
);

app.get("/compare", (req, res) => 
  res.send(bcrypt.compareSync(req.query.password, req.query.hash))
);

export default app; // Export the app for Vercel
