import { UserFactory } from "@Database/Factories/UserFactory";

const user = await UserFactory.build({});

export const RegisterUseCaseFixture = {
  user: user,
  command: {
    valid: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    invalid: {
      name: "",
      email: "invalid-email",
      password: "short",
    },
  },
};
