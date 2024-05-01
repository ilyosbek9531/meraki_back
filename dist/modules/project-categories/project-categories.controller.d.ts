import { ProjectCategoriesService } from "./project-categories.service";
import { CreateProjectCategoryDto } from "./dto/create-project-category.dto";
import { UpdateProjectCategoryDto } from "./dto/update-project-category.dto";
import { PaginationInterface } from "src/common/interfaces";
export declare class ProjectCategoriesController {
    private readonly projectCategoriesService;
    constructor(projectCategoriesService: ProjectCategoriesService);
    create(createProjectCategoryDto: CreateProjectCategoryDto): import(".prisma/client").Prisma.Prisma__ProjectCategoriesClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: PaginationInterface): import(".prisma/client").Prisma.PrismaPromise<({
        projects: {
            id: string;
            image: string;
            title: string;
            description: string;
            project_category_id: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProjectCategoriesClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProjectCategoryDto: UpdateProjectCategoryDto): import(".prisma/client").Prisma.Prisma__ProjectCategoriesClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProjectCategoriesClient<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
