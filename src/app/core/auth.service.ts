import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    public isLoggedIn = false;
    public redirectUrl: string;

    public user: Observable<firebase.User>;
    constructor(
        public afa: AngularFireAuth,
        private router: Router
    ) {
        this.user = afa.authState;
    }

    public register(email: string, password: string) {
        return this.afa
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(red => {
                alert('Registr done!');
            })
            .catch(error => {
                alert(error)
            });
    }
    public login(email: string, password: string) {
        return this.afa
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                alert('Logged');
                this.isLoggedIn = true;
            })
            .catch(error => {
                alert('Idi regaysia')
            })
    }
    loginGoogle() {
        this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
            alert('Google in');
        })
        .catch( error=> {
            alert('dont in');
        })
    }

    public logout() {
        this.afa
            .auth
            .signOut()
            .then(res => {
                this.router.navigate(['/sign-in']);
                this.isLoggedIn = false;
            })
            .catch(error => {

            })
    }


}