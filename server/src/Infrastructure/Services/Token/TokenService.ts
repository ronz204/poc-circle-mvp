import { SignJWT, jwtVerify } from "jose";
import { AuthConfig } from "@Configs/AuthConfig";

const secret = new TextEncoder().encode(AuthConfig.JWT_SECRET);

export interface JwtPayload {
  user: number;
  expi: string;
};

export class TokenService {
  public static async sign(payload: JwtPayload): Promise<string> {
    return new SignJWT({ ...payload })
      .setIssuedAt()
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(payload.expi)
      .sign(secret);
  };

  public static async verify(token: string): Promise<JwtPayload> {
    return await jwtVerify(token, secret) as unknown as JwtPayload;
  };
};
