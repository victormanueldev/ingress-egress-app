import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { ActivateLoadingAction, DeactivateLoadingAction } from '@app/actions/ui.actions';
import { SetUserAuth } from '@app/actions/auth.actions';
import { UnsetItems } from '@app/actions/movements.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subscription  : Subscription = new Subscription();
  private user          : User;

  constructor( 
    private afAuth: AngularFireAuth, 
    private router: Router,
    private afs   : AngularFirestore ,
    private store : Store<AppState>
  ) { 
    this.afAuth.authState.subscribe( (user: firebase.User) => {
      if( !user ) {

        // Unset State
        this.store.dispatch( new UnsetItems() );
        this.store.dispatch( new SetUserAuth( { user: null } ) );

        this.subscription.unsubscribe();
        this.router.navigate(['/auth/login']);
      } else {
        this.subscription = this.afs.doc(`${ user.uid }/usuario`).valueChanges()
        .subscribe( (user: any) => {
          const newUser = new User( user );
          this.store.dispatch( new SetUserAuth( { user: newUser } ) );
          this.user = newUser;
        });
      }
    });
  }

  async createUser(name: string, email: string, password: string): Promise<any> {

    this.store.dispatch( new ActivateLoadingAction() );

    return this.afAuth.auth
      .createUserWithEmailAndPassword( email, password )
      .then( res => {
        
        const user: User = {
          uid   : res.user.uid,
          email : res.user.email,
          name  : name
        }

        this.afs.doc( `${ user.uid }/usuario` ).set( user )
          .then( () => {
            this.store.dispatch( new DeactivateLoadingAction() );
            this.router.navigate(['/admin']);
          })
        
      })
      .catch( error => {
        console.log(error);
        this.store.dispatch( new DeactivateLoadingAction() );
      })
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

  get _user(){
    return { ...this.user };
  }
}
