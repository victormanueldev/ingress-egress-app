import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth, private router: Router ) { 
    this.afAuth.authState.subscribe( (user: firebase.User) => {
      if( !user ) {
        this.router.navigate(['/auth/login']);
      }
    });
  }

  createUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password );
  }

  login( email: string, password: string ): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword( email, password );
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map( user => !!user )
    );
  }
}
