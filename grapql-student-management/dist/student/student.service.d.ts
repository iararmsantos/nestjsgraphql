import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getStudent(id: string): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    getManyStudents(studentIds: string[]): Promise<Student[]>;
}
