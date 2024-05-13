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
 UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PaginationInterface } from "src/common/interfaces";
import { PaginationPipe } from "src/common/pipes/pagination.pipe";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/common/guards/auth.guard";

@Controller("users")
@ApiBearerAuth()
@ApiTags("Users")
export class UsersController {
 constructor(private readonly usersService: UsersService) {}

 @Post()
 create(@Body() createUserDto: CreateUserDto) {
  return this.usersService.create(createUserDto);
 }

 @Get()
 @UseGuards(JwtAuthGuard)
 findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
  return this.usersService.findAll(query);
 }

 @Get(":id")
 findOne(@Param("id", ParseUUIDPipe) id: string) {
  return this.usersService.findOne(id);
 }

 @Patch(":id")
 update(
  @Param("id", ParseUUIDPipe) id: string,
  @Body() updateUserDto: UpdateUserDto
 ) {
  return this.usersService.update(id, updateUserDto);
 }

 @Delete(":id")
 remove(@Param("id", ParseUUIDPipe) id: string) {
  return this.usersService.remove(id);
 }
}
