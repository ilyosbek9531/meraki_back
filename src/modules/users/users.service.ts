import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationInterface } from "src/common/interfaces";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
 constructor(private readonly prisma: PrismaService) {}

 async create(createUserDto: CreateUserDto) {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

  createUserDto.password = hashedPassword;

  return this.prisma.users.create({ data: createUserDto });
 }

 findAll(query: PaginationInterface) {
  return this.prisma.users.findMany({
   include: {
    roles: true,
   },
   skip: query.skip,
   take: query.take,
   orderBy: {
    createdAt: "desc",
   },
  });
 }

 findOne(id: string) {
  return this.prisma.users.findUnique({ where: { id } });
 }

 async update(id: string, updateUserDto: UpdateUserDto) {
  if (updateUserDto.password) {
   updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
  }
  return this.prisma.users.update({ where: { id }, data: updateUserDto });
 }

 remove(id: string) {
  return this.prisma.users.delete({ where: { id } });
 }
}
