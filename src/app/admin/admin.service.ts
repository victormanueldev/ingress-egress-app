import { Injectable } from '@angular/core';
import { Movement } from '@app/models/movement.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@app/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { DeactivateLoadingAction } from '@app/actions/ui.actions';
import { filter, map } from 'rxjs/operators';
import { SetItems } from '@app/actions/movements.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  movementsListener : Subscription = new Subscription();
  authListener      : Subscription = new Subscription();

  constructor(
    private afs         : AngularFirestore,
    private authService : AuthService,
    private store       : Store<AppState>
  ) { }

  initMovementsListener(): void {
    this.authListener = this.store.select('auth')
      .pipe(
        filter( auth => auth.user != null )
      )
      .subscribe( auth => this.getMovements( auth.user.uid ) )
  }

  getMovements( uid: string ) :void { 
    this.movementsListener = this.afs.collection( `${ uid }/movement/items` )
      .snapshotChanges( )
      .pipe(
        map( doc => { 
          return doc.map( (doc: any) => {
           return { 
             uid: doc.payload.doc.id,
             ...doc.payload.doc.data()
           }  
          })
        })
      )
      .subscribe( (movementsData: Movement[]) => {
        this.store.dispatch( new SetItems (movementsData) )
      });
  }

  deleteMovement( movementID: string ): void {
    this.afs.doc(`${ this.authService._user.uid }/movement/items/${movementID}`).delete()
  }

  createMovement( movement: Movement ): void {
    this.afs.doc(`${ this.authService._user.uid }/movement`)
      .collection('items')
      .add( {...movement} )
      .then( () => { this.store.dispatch( new DeactivateLoadingAction() ) })
      .catch( console.log )
  }

  cancelSubscriptions(): void {
    this.movementsListener.unsubscribe();
    this.authListener.unsubscribe();
  }
}
