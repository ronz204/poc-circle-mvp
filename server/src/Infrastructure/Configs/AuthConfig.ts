import * as yup from "yup";

const schema = yup.object({
  JWT_SECRET: yup.string().required(),
  HASH_ROUNDS: yup.number().positive().required().transform((v) => Number(v)),
});

export const AuthConfig = schema.validateSync(process.env);
