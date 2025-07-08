import expres from "express";
import { Bootstrap } from "./Bootstrap";
import { Environment } from "./Environment";

const app = expres();

const bootstrap = new Bootstrap(app);

bootstrap.addRouting();

app.listen(Environment.EXPRESS_PORT, () => {
  console.log(`Server is listening at http://localhost:${Environment.EXPRESS_PORT}`);
});
