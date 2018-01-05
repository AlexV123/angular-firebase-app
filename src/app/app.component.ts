import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses:AngularFireList<any>;
  lesson:AngularFireObject;
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseListObservable<any>;

  constructor(private afDb: AngularFireDatabase) {

    this.courses = afDb.list('courses');
    this.courses$ = this.courses.snapshotChanges();
    this.courses$.subscribe(val => console.log(val));

    this.lesson = afDb.object('lessons/-L26q0chf9cK7Tw9MvG3');
    this.lesson$ = this.lesson.snapshotChanges();
    this.lesson$.subscribe(val => console.log(val));

  }

  listPush() {
    let pushPromise = new Promise(() => {
      this.courses.push({
        description: 'TEST NEW COURSE'
      })
    });
    pushPromise.then(
        () => console.log('Push successful!')
    )
  }

  listRemove() {

  }

  listUpdate() {

  }

  objUpdate() {

  }

  objSet() {

  }
}