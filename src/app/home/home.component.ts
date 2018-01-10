import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/model/lessons.service";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Observable<Lesson[]>;
  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessons = this.lessonsService.findAllLessons().do(console.log);
  }

}
