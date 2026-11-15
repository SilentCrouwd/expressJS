import express from "express";
import router from "./routes/router.js";
const app = express();
import path from "path";
// wichtig für POST funktion

const __dirname = import.meta.dirname;

app.use(express.json());
console.log(__dirname);
// Statisch bereitstellen
app.use("/static", express.static(path.join(__dirname, "../public")));
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(201).json("Hallo World");
});

app.listen("3000", () => {
  console.log(`Example app listening on port `);
});
