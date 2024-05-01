import { Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PaginationInterface } from "src/common/interfaces";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.projects.create({ data: createProjectDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.projects.findMany({
      include: {
        project_category: true,
      },
      take: query.take,
      skip: query.skip,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  findOne(id: string) {
    return this.prisma.projects.findUnique({ where: { id } });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.prisma.projects.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: string) {
    return this.prisma.projects.delete({ where: { id } });
  }
}
