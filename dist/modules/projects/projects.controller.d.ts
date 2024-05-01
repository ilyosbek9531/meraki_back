import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PaginationInterface } from "src/common/interfaces";
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectsClient<{
        id: string;
        image: string;
        title: string;
        description: string;
        project_category_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(query: PaginationInterface): import(".prisma/client").Prisma.PrismaPromise<({
        project_category: {
            id: string;
            title: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        image: string;
        title: string;
        description: string;
        project_category_id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProjectsClient<{
        id: string;
        image: string;
        title: string;
        description: string;
        project_category_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectsClient<{
        id: string;
        image: string;
        title: string;
        description: string;
        project_category_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProjectsClient<{
        id: string;
        image: string;
        title: string;
        description: string;
        project_category_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
