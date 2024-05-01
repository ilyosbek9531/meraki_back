import { ProjectCategories } from "@prisma/client";
export declare class ProjectCategoryEntity implements ProjectCategories {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
}
