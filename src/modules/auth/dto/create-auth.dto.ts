//src/auth/dto/login.dto.ts

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAuthDto {
 @IsString()
 @IsNotEmpty()
 @MinLength(6)
 @ApiProperty()
 username: string;

 @IsString()
 @IsNotEmpty()
 @MinLength(6)
 @ApiProperty()
 password: string;
}
