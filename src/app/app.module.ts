import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import {NgbModule}                from '@ng-bootstrap/ng-bootstrap';

// Firebase
import { AngularFireModule }      from '@angular/fire';
import { AngularFireAuthModule }  from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Charts
import { ChartsModule }           from 'ng2-charts';



// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppRoutingModule }       from '@app/app-routing.module';
import { AppComponent }           from '@app/app.component';
import { AuthComponent }          from '@app/auth/auth.component';
import { AdminComponent }         from '@app/admin/admin.component';
import { LoginComponent }         from '@app/auth/login/login.component';
import { SignupComponent }        from '@app/auth/signup/signup.component';
import { NavbarComponent }        from '@app/shared/navbar/navbar.component';
import { FooterComponent }        from '@app/shared/footer/footer.component';
import { AlertComponent }         from '@app/shared/alert/alert.component';

// Epic Spinner
import { HalfCircleSpinnerModule } from 'angular-epic-spinners';


// NgRx
import { StoreModule }            from '@ngrx/store';
import { StoreDevtoolsModule }    from '@ngrx/store-devtools';
import { environment }            from 'environments/environment';
import { reducers, metaReducers } from './reducers';
import { IngressEgressComponent } from './admin/ingress-egress/ingress-egress.component';
import { StatsComponent } from './admin/stats/stats.component';
import { DetilsComponent } from './admin/detils/detils.component';
import { MovementsOrderPipe } from './admin/movements-order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    AlertComponent,
    IngressEgressComponent,
    StatsComponent,
    DetilsComponent,
    MovementsOrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
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
    HalfCircleSpinnerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
