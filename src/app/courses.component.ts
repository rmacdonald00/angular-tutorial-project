
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // quick css:  <courses> selector is "courses"  or <div class="courses" ".courses" or <div id="courses" "#courses"
    //backtick means we can break up into multiple lines?
    template: ` 
        <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
     ` 
})
export class CoursesComponent{
    title = "List of Courses";

    getTitle(){
        return this.title;
    }

    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    //NOTE: a component should only contain info about presentation, not other logic
}