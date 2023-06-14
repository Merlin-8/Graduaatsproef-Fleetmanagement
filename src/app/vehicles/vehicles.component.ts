import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { HttpClient } from '@angular/common/http';
// import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllVehicles();
  }
  //TODO: ZOekfunctie creëren
  ngOnInit() {}

  getAllVehicles() {
    this.http
      .get('https://localhost:7144/api/vehicles/')
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.vehicles = resultData;
      });
  }
  
}
