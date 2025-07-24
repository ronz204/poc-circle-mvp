import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { AuthLoginUseCase } from "@UseCases/Auth/AuthLogin/AuthLoginUseCase";
import type { AuthLoginCommand } from "@UseCases/Auth/AuthLogin/AuthLoginCommand";

import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";
import type { AuthRegisterCommand } from "@UseCases/Auth/AuthRegister/AuthRegisterCommand";

@injectable()
export class AuthController {
  constructor(
    @inject(AuthLoginUseCase) private readonly authLoginUseCase: AuthLoginUseCase,
    @inject(AuthRegisterUseCase) private readonly authRegisterUseCase: AuthRegisterUseCase
  ) {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  };

  public async login(req: Request, res: Response): Promise<void> {
    const command: AuthLoginCommand = { ...req.body };
    const response = await this.authLoginUseCase.execute(command);
    res.status(200).json(response);
  };

  public async register(req: Request, res: Response): Promise<void> {
    const command: AuthRegisterCommand = { ...req.body };
    const response = await this.authRegisterUseCase.execute(command);
    res.status(201).json(response);
  };
};