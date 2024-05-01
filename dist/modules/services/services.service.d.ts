import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { PaginationInterface } from "src/common/interfaces";
import { PrismaService } from "src/prisma/prisma.service";
export declare class ServicesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): import(".prisma/client").Prisma.Prisma__ServicesClient<{
        id: string;
        image: string;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: PaginationInterface): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        image: string;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ServicesClient<{
        id: string;
        image: string;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServicesClient<{
        id: string;
        image: string;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ServicesClient<{
        id: string;
        image: string;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
