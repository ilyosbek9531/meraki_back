import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ProjectCategoriesService } from "./project-categories.service";
import { CreateProjectCategoryDto } from "./dto/create-project-category.dto";
import { UpdateProjectCategoryDto } from "./dto/update-project-category.dto";
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { ProjectCategoryEntity } from "./entities/project-category.entity";
import { PaginationPipe } from "src/common/pipes/pagination.pipe";
import { PaginationInterface } from "src/common/interfaces";

@Controller("project-categories")
@ApiTags("Project Categories")
export class ProjectCategoriesController {
  constructor(
    private readonly projectCategoriesService: ProjectCategoriesService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ProjectCategoryEntity })
  create(@Body() createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.projectCategoriesService.create(createProjectCategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: ProjectCategoryEntity, isArray: true })
  @ApiQuery({ name: "take", type: Number, required: false })
  @ApiQuery({ name: "skip", type: Number, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.projectCategoriesService.findAll(query);
  }

  @Get(":id")
  @ApiOkResponse({ type: ProjectCategoryEntity })
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.projectCategoriesService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: ProjectCategoryEntity })
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateProjectCategoryDto: UpdateProjectCategoryDto
  ) {
    return this.projectCategoriesService.update(id, updateProjectCategoryDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: ProjectCategoryEntity })
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.projectCategoriesService.remove(id);
  }
}
