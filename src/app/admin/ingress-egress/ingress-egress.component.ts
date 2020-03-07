import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { Movement } from '@app/models/movement.model';
import { ActivateLoadingAction } from '@app/actions/ui.actions';
import { AdminService } from '../admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingress-egress',
  templateUrl: './ingress-egress.component.html',
  styleUrls: ['./ingress-egress.component.scss']
})
export class IngressEgressComponent implements OnInit, OnDestroy {

  movementsForm : FormGroup;
  isLoading     : boolean;

  loadingSubscription  : Subscription;

  constructor(
    private store: Store<AppState>,
    private adminService: AdminService
  ) { 
    this.movementsForm = new FormGroup({
      'description' : new FormControl('', Validators.required),
      'amount'      : new FormControl(0,  Validators.compose( [Validators.required, Validators.min(1) ])),
      'type'        : new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.loadingSubscription = this.store.select('ui').subscribe( state => this.isLoading = state.isLoading );
  }

  saveMovement( formData: any ): void {
    const movement = new Movement( { ...formData } )
    this.adminService.createMovement( movement );
    this.store.dispatch( new ActivateLoadingAction()  );
    this.movementsForm.reset();
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
