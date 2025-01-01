import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';
export declare class LessonResolver {
    private lessonService;
    private studentService;
    constructor(lessonService: LessonService, studentService: StudentService);
    lesson(id: string): Promise<Lesson>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    lessons(): Promise<Lesson[]>;
    assignStudentsToLesson(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<Lesson>;
    students(lesson: Lesson): Promise<import("../student/student.entity").Student[]>;
}
