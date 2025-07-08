import expres from "express";
import { Environment } from "./Environment";

const app = expres();

app.listen(Environment.EXPRESS_PORT, () => {
  console.log(`Server is listening at http://localhost:${Environment.EXPRESS_PORT}`);
});