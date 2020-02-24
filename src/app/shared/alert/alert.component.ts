import { Component, OnInit, Input } from '@angular/core';
import { Alert } from './alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertData: Alert;

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.alertData.present = false;
  }

}
