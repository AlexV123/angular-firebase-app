import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firebaseCourses = [];
  lastFirebaseCourseKey = '';
  courses: AngularFireList<any>;
  lesson: AngularFireObject<any>;

  constructor(private afDb: AngularFireDatabase) {

    this.courses = afDb.list('courses');
    this.courses.snapshotChanges().subscribe(val =>  {
        this.firebaseCourses = val;
        this.lastFirebaseCourseKey = this.firebaseCourses[this.firebaseCourses.length - 1].key;
        console.log(this.firebaseCourses);
    });

    this.lesson = afDb.object('lessons/-L26q0chf9cK7Tw9MvG3');

  }

  pushCourse() {
    this.courses.push({
        description: 'TEST NEW COURSE'
    });
  };

  removeCourse() {
    this.courses.remove(this.lastFirebaseCourseKey);
  }

  updateCourse() {
    this.courses.update(this.lastFirebaseCourseKey, {
        description: 'Update Test'
    });
  }

  setLesson() {
      this.lesson.set({
          description: 'NEW LESSON'
      })
  }

  updateLesson() {
    this.lesson.update({
        description: 'UPDATED LESSON'
    })
  }

  removeLesson() {
      this.lesson.remove();
  }
}