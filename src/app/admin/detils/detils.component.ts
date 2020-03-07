import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Movement } from '@app/models/movement.model';
import { map } from 'rxjs/operators';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-detils',
  templateUrl: './detils.component.html',
  styleUrls: ['./detils.component.scss']
})
export class DetilsComponent implements OnInit {

  movements$            : Observable<Movement[]> = null;

  constructor(
    private store: Store<AppState>,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.movements$ = this.store.select('movements').pipe( map( movements => movements.movements ) );
  }


  deleteItem( uid: string ): void {
    this.adminService.deleteMovement( uid );
  }

}
