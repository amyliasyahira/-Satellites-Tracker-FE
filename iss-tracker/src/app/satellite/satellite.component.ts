import { Component, OnInit } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';
import { SatelliteService } from './satellite.service';
import * as moment from 'moment';


@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {

  satelliteInfo: any = {};
  myDatePicker: any;
  satellitePositions: any[] = []
  constructor(private satelliteService: SatelliteService) { }

  ngOnInit(){
    console.log("Page OnInit..")
    this.getSatelliteInfo();
    this.getSatellitePosition('1436029892');
  }

  getSatelliteInfo(){
    this.satelliteService.getSatelliteInfo().subscribe((resp: any) => {
      this.satelliteInfo = resp
      console.log("satelliteInfo: " + JSON.stringify(this.satelliteInfo));
      }
    );
  }

  getSatellitePosition(timestamp: any){
    this.satelliteService.getSatellitePosition(timestamp).subscribe((resp: any) => {
      this.satellitePositions = resp
      console.log("satellitePositions: " + JSON.stringify(this.satellitePositions));
      }
    );
  }

  updateDateTime(){
    let currentDateTime = moment(this.myDatePicker).format('X');
    let tenMinutesAgo = moment(this.myDatePicker).subtract('10', 'minutes').format('X');
    let nextOneHour = moment(this.myDatePicker).add('1', 'hour').format('X');
    console.log("Current: " + JSON.stringify(currentDateTime));
    console.log("tenMinutesAgo: " + JSON.stringify(tenMinutesAgo));
    console.log("nextOneHour: " + JSON.stringify(nextOneHour));

    let timestamps: any[] = []
    timestamps.push(tenMinutesAgo, currentDateTime, nextOneHour) ;
    let param = timestamps.join();
    console.log("timestamp array: " + JSON.stringify(param));

    this.getSatellitePosition(param);
  }

}
