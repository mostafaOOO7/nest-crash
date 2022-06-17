import { Controller, Get } from "@nestjs/common";
import { get } from "http";

@Controller('students')
export class StudentController {
    @Get()
    getStudents(){
        return "All Students";
    }

    @Get(':/studentId')
    getStudentById(){
        return "Get Student By Id";
    }
}