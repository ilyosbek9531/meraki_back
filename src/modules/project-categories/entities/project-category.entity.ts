import { ApiProperty } from "@nestjs/swagger";
import { ProjectCategories } from "@prisma/client";

export class ProjectCategoryEntity implements ProjectCategories {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
