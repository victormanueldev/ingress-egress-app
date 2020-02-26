import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Alert } from '@app/shared/alert/alert.interface';
import { Store } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { ActivateLoadingAction, DeactivateLoadingAction } from '@app/actions/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  alertData     : Alert;
  isLoading     : boolean;
  subscription  : Subscription

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.alertData = {
      present : false,
      icon    : '',
      message : '',
      cssClass: '',
      type    : ''
    }

    this.subscription = this.store.select('ui').subscribe( ui => this.isLoading = ui.isLoading );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async login( formData: any ): Promise<void> {

    this.store.dispatch( new ActivateLoadingAction() );

    try {
      const user = await this.authService.login( formData.email, formData.password );
      this.router.navigate(['/admin']);

    } catch (error) {
      this.alertData.cssClass = 'error';
      this.alertData.icon     = 'fa-times-circle';
      this.alertData.type     = 'Error';
      this.alertData.message  = error.message;
      this.alertData.present  = true;
    } finally {
      this.store.dispatch( new DeactivateLoadingAction() );
      setTimeout(() => {
        this.alertData.present = false;
      }, 3000);
    }
  }

}
