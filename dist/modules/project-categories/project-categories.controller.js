"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const project_categories_service_1 = require("./project-categories.service");
const create_project_category_dto_1 = require("./dto/create-project-category.dto");
const update_project_category_dto_1 = require("./dto/update-project-category.dto");
const swagger_1 = require("@nestjs/swagger");
const project_category_entity_1 = require("./entities/project-category.entity");
const pagination_pipe_1 = require("../../common/pipes/pagination.pipe");
let ProjectCategoriesController = class ProjectCategoriesController {
    constructor(projectCategoriesService) {
        this.projectCategoriesService = projectCategoriesService;
    }
    create(createProjectCategoryDto) {
        return this.projectCategoriesService.create(createProjectCategoryDto);
    }
    findAll(query) {
        return this.projectCategoriesService.findAll(query);
    }
    findOne(id) {
        return this.projectCategoriesService.findOne(id);
    }
    update(id, updateProjectCategoryDto) {
        return this.projectCategoriesService.update(id, updateProjectCategoryDto);
    }
    remove(id) {
        return this.projectCategoriesService.remove(id);
    }
};
exports.ProjectCategoriesController = ProjectCategoriesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: project_category_entity_1.ProjectCategoryEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_category_dto_1.CreateProjectCategoryDto]),
    __metadata("design:returntype", void 0)
], ProjectCategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: project_category_entity_1.ProjectCategoryEntity, isArray: true }),
    (0, swagger_1.ApiQuery)({ name: "take", type: Number, required: false }),
    (0, swagger_1.ApiQuery)({ name: "skip", type: Number, required: false }),
    __param(0, (0, common_1.Query)(new pagination_pipe_1.PaginationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOkResponse)({ type: project_category_entity_1.ProjectCategoryEntity }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectCategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOkResponse)({ type: project_category_entity_1.ProjectCategoryEntity }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_category_dto_1.UpdateProjectCategoryDto]),
    __metadata("design:returntype", void 0)
], ProjectCategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOkResponse)({ type: project_category_entity_1.ProjectCategoryEntity }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectCategoriesController.prototype, "remove", null);
exports.ProjectCategoriesController = ProjectCategoriesController = __decorate([
    (0, common_1.Controller)("project-categories"),
    (0, swagger_1.ApiTags)("Project Categories"),
    __metadata("design:paramtypes", [project_categories_service_1.ProjectCategoriesService])
], ProjectCategoriesController);
//# sourceMappingURL=project-categories.controller.js.map