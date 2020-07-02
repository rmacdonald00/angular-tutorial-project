
import {Component} from '@angular/core';

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

    courses = ["course1", "course2", "course3"];
}