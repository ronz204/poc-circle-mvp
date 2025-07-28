import { UserFactory } from "@Database/Factories/UserFactory";

const user = await UserFactory.build({});

export const LoginUseCaseFixture = {
  user: user,
  command: {
    valid: {
      email: user.email,
      password: user.password,
    },
    invalid: {
      email: "invalid-email",
      password: "short",
    },
  },
};
