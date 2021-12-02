import { Component, OnInit } from '@angular/core';
import { SatelliteService } from './satellite.service';


@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {

  satelliteInfo: any = {};
  selectedDate: any;
  datePickerConfig: any = {

  };
  constructor(private satelliteService: SatelliteService) { }

  ngOnInit(){
    console.log("Page OnInit..")
    this.getSatelliteInfo();
    this.getSatellitePosition('1436029892');
  }

  getSatelliteInfo(){
    this.satelliteService.getSatelliteInfo().subscribe((resp: any) => {
      this.satelliteInfo = resp
      console.log("RESP: " + JSON.stringify(this.satelliteInfo));
      }
    );
  }

  getSatellitePosition(timestamp: any){
    this.satelliteService.getSatellitePosition(timestamp).subscribe((resp: any) => {
      this.satelliteInfo = resp
      console.log("RESP: " + JSON.stringify(this.satelliteInfo));
      }
    );
  }

}
