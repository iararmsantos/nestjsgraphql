import { Task as TaskEntity } from 'src/tasks/entities/task.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';
import { User } from 'src/auth/entities/user.entity';
export declare class TasksRepository extends Repository<TaskEntity> {
    private dataSource;
    private logger;
    constructor(dataSource: DataSource);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<TaskEntity[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<TaskEntity>;
}
