import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class LessonsService {

  constructor(private afDb: AngularFireDatabase) {}

  findAllLessons() {
    return this.afDb.list('lessons').snapshotChanges().map(lessons => {
      return lessons.map(lesson => ({ key: lesson.key, ...lesson.payload.val() }));
    });
  }

}
