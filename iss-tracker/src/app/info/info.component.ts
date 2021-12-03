import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnChanges {

  @Input() satellitePositions: any;
  @Input() myDatePicker: any;
  @Output() satellitePositionsChange = new EventEmitter<any>()

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    let currentDateTime = moment(this.myDatePicker).format('YYYY-MM-DD HH:mm:ss');
    let tenMinutesAgo = moment(this.myDatePicker).subtract('10', 'minutes').format('YYYY-MM-DD HH:mm:ss');
    let nextOneHour = moment(this.myDatePicker).add('1', 'hour').format('YYYY-MM-DD HH:mm:ss');

    for(let item of this.satellitePositions){
      switch (item.index) {
        case 0:
          item.time = tenMinutesAgo
          break;
        case 1:
          item.time = currentDateTime
          break;
        case 2:
          item.time = nextOneHour
          break;
      
        default:
          break;
      }
    }

    console.table(this.satellitePositions);
  }

  ngOnInit(): void {
  }

}
