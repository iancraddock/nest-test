import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    console.log(courses);
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId: number) {
    const course = await this.coursesService.getCourse(courseId);
    console.log(course);
    return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.addCourse(createCourseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query: any) {
    const courses = await this.coursesService.deleteCourse(query.courseId);
    return courses;
  }
}
