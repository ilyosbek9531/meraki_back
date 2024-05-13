import { ApiProperty } from "@nestjs/swagger";
import { Users } from "@prisma/client";

export class UserEntity implements Users {
 @ApiProperty()
 id: string;

 @ApiProperty()
 first_name: string;

 @ApiProperty()
 last_name: string;

 @ApiProperty()
 username: string;

 @ApiProperty()
 phone_number: string;

 @ApiProperty()
 password: string;

 @ApiProperty()
 role_id: string;

 @ApiProperty()
 active: boolean;

 @ApiProperty()
 createdAt: Date;

 @ApiProperty()
 updatedAt: Date;
}
