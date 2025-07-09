import expres from "express";
import { Bootstrap } from "./Bootstrap";
import { ApiConfig } from "@Configs/ApiConfig";

export const app = expres();
const bootstrap = new Bootstrap(app);

bootstrap.addRouting();

app.listen(ApiConfig.PORT, () => {
  console.log(`Server is listening at http://localhost:${ApiConfig.PORT}`);
});
