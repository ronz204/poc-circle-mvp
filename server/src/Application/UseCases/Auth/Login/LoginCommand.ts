import * as yup from "yup";
import { LoginSchema } from "./LoginSchema";
export type LoginCommand = yup.InferType<typeof LoginSchema>;
