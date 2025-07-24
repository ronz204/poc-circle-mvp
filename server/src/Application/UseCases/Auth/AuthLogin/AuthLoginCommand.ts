import * as yup from "yup";
import { AuthLoginSchema } from "./AuthLoginSchema";
export type AuthLoginCommand = yup.InferType<typeof AuthLoginSchema>;
