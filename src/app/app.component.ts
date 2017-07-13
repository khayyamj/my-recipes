import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD1ilqBH8u0YGMFc6C-JbqpQtHVsNtH7lY",
      authDomain: "my-recipes-72e90.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
