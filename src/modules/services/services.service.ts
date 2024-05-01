import { Injectable } from "@nestjs/common";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { PaginationInterface } from "src/common/interfaces";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createServiceDto: CreateServiceDto) {
    return this.prisma.services.create({ data: createServiceDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.services.findMany({
      skip: query.skip,
      take: query.take,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  findOne(id: string) {
    return this.prisma.services.findUnique({ where: { id } });
  }

  update(id: string, updateServiceDto: UpdateServiceDto) {
    return this.prisma.services.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  remove(id: string) {
    return this.prisma.services.delete({ where: { id } });
  }
}
