import { Services } from "@prisma/client";
export declare class ServiceEntity implements Services {
    id: string;
    image: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
