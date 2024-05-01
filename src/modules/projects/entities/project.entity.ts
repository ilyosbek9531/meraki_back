import { ApiProperty } from "@nestjs/swagger";
import { Projects } from "@prisma/client";

export class ProjectEntity implements Projects {
  @ApiProperty()
  id: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  project_category_id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
