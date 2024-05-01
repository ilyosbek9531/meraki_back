import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationInterface } from "src/common/interfaces";
export declare class RolesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): import(".prisma/client").Prisma.Prisma__RolesClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: PaginationInterface): import(".prisma/client").Prisma.PrismaPromise<({
        permissions: {
            id: string;
            read: boolean;
            write: boolean;
            update: boolean;
            delete: boolean;
            role_id: string;
            table_id: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        users: {
            id: string;
            first_name: string;
            last_name: string;
            email: string;
            phone_number: string;
            hashed_password: string;
            role_id: string;
            active: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RolesClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateRoleDto: UpdateRoleDto): import(".prisma/client").Prisma.Prisma__RolesClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__RolesClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
