import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { AuthEntity } from "./entities/auth.entity";
import { CreateAuthDto } from "./dto/create-auth.dto";

@Controller("auth")
export class AuthController {
 constructor(private readonly authService: AuthService) {}

 @Post("login")
 @ApiOkResponse({ type: AuthEntity })
 login(@Body() { username, password }: CreateAuthDto) {
  return this.authService.login(username, password);
 }
}
