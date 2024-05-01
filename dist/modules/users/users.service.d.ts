import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationInterface } from "src/common/interfaces";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: PaginationInterface): import(".prisma/client").Prisma.PrismaPromise<({
        roles: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UsersClient<{
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsersClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsersClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
