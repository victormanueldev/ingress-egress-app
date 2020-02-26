import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  subscription  : Subscription;

  constructor(
    private authServivce: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('ui').subscribe( ui => this.isLoading = ui.isLoading );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async signup(formData: any): Promise<void> {
    const user = await this.authServivce.createUser( formData.name, formData.email, formData.password );
  }
}
