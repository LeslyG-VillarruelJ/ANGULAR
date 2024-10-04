import { Injectable } from '@angular/core';
import { CourseData } from '../data/course.data';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course: Course = CourseData; //definida e inicializada la clase
  constructor() { }

  getCourse():Course{
    return this.course;
  }
}
