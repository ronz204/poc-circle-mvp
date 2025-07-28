import * as yup from "yup";
import { RegisterSchema } from "./RegisterSchema";
export type RegisterCommand = yup.InferType<typeof RegisterSchema>;
