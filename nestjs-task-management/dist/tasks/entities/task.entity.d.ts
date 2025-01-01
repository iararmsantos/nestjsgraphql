import { TaskStatus } from '../dto/task-status.enum';
import { User } from 'src/auth/entities/user.entity';
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
}
