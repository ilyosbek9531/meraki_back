import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { ProjectEntity } from "./entities/project.entity";
import { PaginationPipe } from "src/common/pipes/pagination.pipe";
import { PaginationInterface } from "src/common/interfaces";

@Controller("projects")
@ApiTags("Projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiCreatedResponse({ type: ProjectEntity })
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @ApiOkResponse({ type: ProjectEntity, isArray: true })
  @ApiQuery({ name: "take", type: Number, required: false })
  @ApiQuery({ name: "skip", type: Number, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.projectsService.findAll(query);
  }

  @Get(":id")
  @ApiOkResponse({ type: ProjectEntity })
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: ProjectEntity })
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: ProjectEntity })
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.projectsService.remove(id);
  }
}
