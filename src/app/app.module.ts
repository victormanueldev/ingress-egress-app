import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import {NgbModule}                from '@ng-bootstrap/ng-bootstrap';

// Firebase
import { AngularFireModule }      from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Components
import { AppRoutingModule }       from '@app/app-routing.module';
import { AppComponent }           from '@app/app.component';

// NgRx
import { StoreModule }            from '@ngrx/store';
import { StoreDevtoolsModule }    from '@ngrx/store-devtools';
import { environment }            from 'environments/environment';
import { reducers, metaReducers } from './reducers';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
