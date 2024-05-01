import { Roles } from '@prisma/client';
export declare class RoleEntity implements Roles {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
