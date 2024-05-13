import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
 imports: [
  PassportModule,
  JwtModule.register({
   secret: process.env.JWT_SECRET,
   signOptions: { expiresIn: "24h" },
  }),
  UsersModule,
 ],
 controllers: [AuthController],
 providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}
