import { Module } from "@nestjs/common";
import { ProjectCategoriesService } from "./project-categories.service";
import { ProjectCategoriesController } from "./project-categories.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [ProjectCategoriesController],
  providers: [ProjectCategoriesService, PrismaService],
})
export class ProjectCategoriesModule {}
