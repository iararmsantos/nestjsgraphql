import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Task as TaskEntity } from './entities/task.entity';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';
import { TasksRepository } from './repository/tasks.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), AuthModule],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  exports: [TasksService],
})
export class TasksModule {}
