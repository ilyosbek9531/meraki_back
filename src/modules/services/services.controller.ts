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
import { ServicesService } from "./services.service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { ServiceEntity } from "./entities/service.entity";
import { PaginationPipe } from "src/common/pipes/pagination.pipe";
import { PaginationInterface } from "src/common/interfaces";

@Controller("services")
@ApiTags("Services")
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @ApiCreatedResponse({ type: ServiceEntity })
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  @ApiOkResponse({ type: ServiceEntity, isArray: true })
  @ApiQuery({ name: "take", type: Number, required: false })
  @ApiQuery({ name: "skip", type: Number, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.servicesService.findAll(query);
  }

  @Get(":id")
  @ApiOkResponse({ type: ServiceEntity })
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.servicesService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: ServiceEntity })
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateServiceDto: UpdateServiceDto
  ) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: ServiceEntity })
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.servicesService.remove(id);
  }
}
