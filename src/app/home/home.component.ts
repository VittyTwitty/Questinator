import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthService } from "../core/auth.service";

@Component({
  selector: 'q-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private authService: AuthService) {
    this.items = af.list('/1', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

    console.log(this.items)

  }

  ngOnInit() { }


  logout() {
    this.authService.logout();
  }
}
