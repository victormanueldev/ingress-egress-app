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
import { environment }            from 'environments/environment';
import { AlertComponent } from './shared/alert/alert.component';

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
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
