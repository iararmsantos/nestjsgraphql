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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("../entities/task.entity");
const typeorm_1 = require("typeorm");
const task_status_enum_1 = require("../dto/task-status.enum");
let TasksRepository = class TasksRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(task_entity_1.Task, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.logger = new common_1.Logger('TasksRepository', { timestamp: true });
    }
    async getTasks(filterDto, user) {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
        query.where({ user });
        if (status) {
            query.andWhere('task.status = :status', { status });
        }
        if (search) {
            query.andWhere('task.title LIKE :search OR task.description LIKE :search', { search: `%${search}%` });
        }
        try {
            const tasks = await query.getMany();
            return tasks;
        }
        catch (error) {
            this.logger.error(`Failed to get tasks for user ${user.username}. Filters: ${JSON.stringify(filterDto)}. Error: `, error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async createTask(createTaskDto, user) {
        const { title, description } = createTaskDto;
        const task = this.create({
            title,
            description,
            status: task_status_enum_1.TaskStatus.OPEN,
            user,
        });
        try {
            await this.save(task);
            return task;
        }
        catch (error) {
            this.logger.error(`Failed to create task for user ${user.username}. Task: ${JSON.stringify(createTaskDto)}. Error: `, error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.TasksRepository = TasksRepository;
exports.TasksRepository = TasksRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TasksRepository);
//# sourceMappingURL=tasks.repository.js.map