import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB-vAoSOXGPGqW_hZBNtYb3Qbtqc05FynY",
      authDomain: "angular-firebase-app-f846b.firebaseapp.com",
      databaseURL: "https://angular-firebase-app-f846b.firebaseio.com",
      projectId: "angular-firebase-app-f846b",
      storageBucket: "angular-firebase-app-f846b.appspot.com",
      messagingSenderId: "1033756615151"
    };
    firebase.initializeApp(config);

    var root = firebase.database().ref();
    root.on('value', function (snap) {
      console.log(snap.key, snap.val());
    });

  }
}