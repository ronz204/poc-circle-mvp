import * as yup from "yup";

const schema = yup.object({
  PORT: yup.number().positive().required().transform((v) => Number(v)),
});

export const ApiConfig = schema.validateSync(process.env);