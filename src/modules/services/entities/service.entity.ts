import { ApiProperty } from "@nestjs/swagger";
import { Services } from "@prisma/client";

export class ServiceEntity implements Services {
  @ApiProperty()
  id: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
