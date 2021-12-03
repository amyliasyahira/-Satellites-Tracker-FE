import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Loader, LoaderOptions} from 'google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() satelliteCoordinates: any[] = [];
  @Output() satelliteCoordinatesChange = new EventEmitter<any>()

  constructor() { }
  

  ngOnInit(): void {
    this.renderMap();
  }

  async renderMap(){
    const options: LoaderOptions = {/* todo */};
    const loader = new Loader('my-api-key', options);
     
    const google = await loader.load();
    const map = new google.maps.Map(document.getElementById('map')!, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
    });

    let flightPlanCoordinates = this.satelliteCoordinates;
    let flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);
  }

}
