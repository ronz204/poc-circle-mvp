import bcrypt from "bcryptjs";
import { AuthConfig } from "@Configs/AuthConfig";

export class BcryptService {
  public static async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, AuthConfig.HASH_ROUNDS!);
  };

  public static async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  };
};
