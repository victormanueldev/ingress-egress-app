import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AdminService } from './admin.service';
import { AppState } from '@app/reducers';
import { Observable, Subscription } from 'rxjs';
import { User } from '@app/models/user.model';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit, OnDestroy {

  userData          : any = { };
  userSubscription  : Subscription = new Subscription();

  constructor(
    private adminService: AdminService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.adminService.initMovementsListener();

    this.userSubscription = this.store.select('auth').pipe(
      filter( auth => auth.user != null )
    )
    .subscribe( auth => this.userData = auth.user )
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
