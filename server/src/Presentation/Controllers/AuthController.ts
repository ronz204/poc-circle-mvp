import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { LoginUseCase } from "@UseCases/Auth/Login/LoginUseCase";
import type { LoginCommand } from "@UseCases/Auth/Login/LoginCommand";

import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";
import type { AuthRegisterCommand } from "@UseCases/Auth/AuthRegister/AuthRegisterCommand";

@injectable()
export class AuthController {
  constructor(
    @inject(LoginUseCase) private readonly authLoginUseCase: LoginUseCase,
    @inject(AuthRegisterUseCase) private readonly authRegisterUseCase: AuthRegisterUseCase
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
    const command: AuthRegisterCommand = { ...req.body };
    const response = await this.authRegisterUseCase.execute(command);
    res.status(201).json(response);
  };
};