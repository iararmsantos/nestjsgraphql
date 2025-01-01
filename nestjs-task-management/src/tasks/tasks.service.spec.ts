import { Test } from '@nestjs/testing';
import { TasksService } from './service/tasks.service';
import { TasksRepository } from './repository/tasks.repository';
import { TaskStatus } from './dto/task-status.enum';
import { NotFoundException } from '@nestjs/common';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn(),
});

const mockUser = {
  username: 'Iara',
  id: 'someId',
  password: 'somePassword',
  tasks: [],
};

//to run tests: npm test --watch
describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();
    tasksService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls TasksRepository.getTasks and returns Tasks', async () => {
      expect(tasksRepository.getTasks).not.toHaveBeenCalled();
      //method return a promise so mockResolvedValue
      tasksRepository.getTasks.mockResolvedValue(mockUser);
      //call tasksService.getTasks, which should then call repository's get Tasks
      const result = await tasksService.getTasks(null, mockUser);
      console.log(result);
      expect(tasksRepository.getTasks).toHaveBeenCalled();
      expect(result).toEqual(mockUser);
    });
  });

  describe('getTaskById', () => {
    it('calls TasksRepository.findOne and returns the result', async () => {
      const mockTask = {
        title: 'Test title',
        description: 'test description',
        id: 'someId',
        status: TaskStatus.OPEN,
      };

      tasksRepository.findOne.mockResolvedValue(mockTask);
      const result = await tasksService.getTaskById('someId', mockUser);

      expect(result).toEqual(mockTask);
    });

    it('calls TasksRepository.findOne and handles error', async () => {
      tasksRepository.findOne.mockResolvedValue(null);
      expect(tasksService.getTaskById('someId', mockUser)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
