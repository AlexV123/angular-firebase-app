import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firebaseCoursesKeys = [];
  courses: AngularFireList<any>;
  lesson: AngularFireObject<any>;

  constructor(private afDb: AngularFireDatabase) {

    this.courses = afDb.list('courses');
    // this.courses.snapshotChanges().subscribe(val => console.log(val));

    this.lesson = afDb.object('lessons/-L26q0chf9cK7Tw9MvG3');
    this.lesson.snapshotChanges().subscribe(val => console.log(val));

  }

  listPush() {
      this.courses.push({
        description: 'TEST NEW COURSE'
      });
      this.courses.snapshotChanges(['child_added'])
          .subscribe(childrenAdded => {
            const lastChildAddedKey = childrenAdded.slice(-1)[0].key;
            if (this.firebaseCoursesKeys.indexOf(lastChildAddedKey) == -1) {
              this.firebaseCoursesKeys.push(lastChildAddedKey);
            }
          });
  };

  listRemove() {
    this.courses.remove(this.firebaseCoursesKeys[this.firebaseCoursesKeys.length - 1]);
    this.courses.snapshotChanges(['child_removed']).subscribe(val => console.log('Remove successful!'));
  }

  listUpdate() {

  }

  objUpdate() {

  }

  objSet() {

  }
}