import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    getLesson(id: string): Promise<Lesson>;
    getAllLessons(): Promise<Lesson[]>;
    assignStudentsToLesson(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<Lesson>;
}
