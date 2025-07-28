import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { LoginUseCase } from "@UseCases/Auth/Login/LoginUseCase";
import type { LoginCommand } from "@UseCases/Auth/Login/LoginCommand";

import { RegisterUseCase } from "@UseCases/Auth/Register/RegisterUseCase";
import type { RegisterCommand } from "@UseCases/Auth/Register/RegisterCommand";

@injectable()
export class AuthController {
  constructor(
    @inject(LoginUseCase) private readonly authLoginUseCase: LoginUseCase,
    @inject(RegisterUseCase) private readonly authRegisterUseCase: RegisterUseCase,
  ) {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  };

  public async login(req: Request, res: Response): Promise<void> {
    const command: LoginCommand = { ...req.body };
    const response = await this.authLoginUseCase.execute(command);
    res.status(200).json(response);
  };

  public async register(req: Request, res: Response): Promise<void> {
    const command: RegisterCommand = { ...req.body };
    const response = await this.authRegisterUseCase.execute(command);
    res.status(201).json(response);
  };
};