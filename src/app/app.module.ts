import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import {NgbModule}                from '@ng-bootstrap/ng-bootstrap';

// Firebase
import { AngularFireModule }      from '@angular/fire';
import { AngularFireAuthModule }  from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


// Forms
import { FormsModule }            from '@angular/forms';

// Components
import { AppRoutingModule }       from '@app/app-routing.module';
import { AppComponent }           from '@app/app.component';
import { AuthComponent }          from '@app/auth/auth.component';
import { AdminComponent }         from '@app/admin/admin.component';
import { LoginComponent }         from '@app/auth/login/login.component';
import { SignupComponent }        from '@app/auth/signup/signup.component';
import { NavbarComponent }        from '@app/shared/navbar/navbar.component';
import { FooterComponent }        from '@app/shared/footer/footer.component';
import { StatsComponent }         from '@app/admin/stats/stats.component';
import { AlertComponent }         from '@app/shared/alert/alert.component';

// Epic Spinner
import { HalfCircleSpinnerModule } from 'angular-epic-spinners';


// NgRx
import { StoreModule }            from '@ngrx/store';
import { StoreDevtoolsModule }    from '@ngrx/store-devtools';
import { environment }            from 'environments/environment';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    StatsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HalfCircleSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
