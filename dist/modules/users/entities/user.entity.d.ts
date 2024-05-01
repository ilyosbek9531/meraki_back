import { Users } from '@prisma/client';
export declare class UserEntity implements Users {
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
}
