import { Projects } from "@prisma/client";
export declare class ProjectEntity implements Projects {
    id: string;
    image: string;
    title: string;
    description: string;
    project_category_id: string;
    createdAt: Date;
    updatedAt: Date;
}
