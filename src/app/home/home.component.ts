import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { MainService } from "../shared/main.service";

@Component({
  selector: 'q-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public question: any;
  public arr: any[] = [];
  constructor(private mainService: MainService) {
    this.question = this.mainService
      .getQuestion()
      .subscribe(res => {
        this.arr.push(res);
        return this.arr;
      })
    console.log(this.question)
  }

  // getQuestions() {
  //   return this.mainService
  //     .getQuestion()
  //     .subscribe(res => {
  //       console.log('res' + res)
  //     })
  // }
  // user: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;
  // msgVal: string = '';

  // constructor(
  //   public afAuth: AngularFireAuth,
  //   public af: AngularFireDatabase,
  //   private authService: AuthService) {
  //   this.items = af.list('/questions', {
  //     query: {
  //       limitToLast: 50
  //     }
  //   });

  //   this.user = this.afAuth.authState;

  //   console.log(this.items)

  // }

  ngOnInit() { }


  // logout() {
  //   this.authService.logout();
  // }
}
