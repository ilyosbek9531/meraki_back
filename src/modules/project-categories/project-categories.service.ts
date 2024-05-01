import { Injectable } from "@nestjs/common";
import { CreateProjectCategoryDto } from "./dto/create-project-category.dto";
import { UpdateProjectCategoryDto } from "./dto/update-project-category.dto";
import { PaginationInterface } from "src/common/interfaces";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProjectCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.prisma.projectCategories.create({
      data: createProjectCategoryDto,
    });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.projectCategories.findMany({
      include: {
        projects: true,
      },
      take: query.take,
      skip: query.skip,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  findOne(id: string) {
    return this.prisma.projectCategories.findUnique({ where: { id } });
  }

  update(id: string, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return this.prisma.projectCategories.update({
      where: { id },
      data: updateProjectCategoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.projectCategories.delete({
      where: { id },
    });
  }
}
