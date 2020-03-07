import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/reducers';
import { getTotalMovementType } from '@app/selectors/movements.selectors';
import { Observable, Subscription } from 'rxjs';
import { Movement } from '@app/models/movement.model';
import { Label, MultiDataSet } from 'ng2-charts';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public doughnutChartLabels  : Label[]   = ['Ingress', 'Egress'];
  public doughnutChartData    : number[]  = [ 0,0 ];
  public doughnutChartColors  : any[]     = [ { backgroundColor: [ '#2dce89', '#f5365c' ] } ];

  totalIngress  : Observable<number>;
  totalEgress   : Observable<number>;

  ingress       : number;
  egress        : number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.totalIngress = this.store.pipe(
      select( getTotalMovementType(), { id: 0, type: 'Ingress' } ),
      tap( ingress => {  
        this.ingress = ingress;
        this._changeChartData();
      })
     );
 
     this.totalEgress = this.store.pipe(
       select( getTotalMovementType(), { id: 1, type: 'Egress' } ),
       tap( egress =>  { 
         this.egress = egress;
         this._changeChartData();
        })
     );
  }

  private _changeChartData( ) {
    this.doughnutChartData = [this.ingress, this.egress];
  }

}
