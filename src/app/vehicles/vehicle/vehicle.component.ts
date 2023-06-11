import { ActivatedRoute, Router, Params } from '@angular/router';
// // import { VehiclesService } from './../vehicles.service';
// import { Vehicle } from './../vehicle.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  vin: string;
  vehicle: any;
  driver: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.vin = history.state.vehicle.vin;
  }

  ngOnInit() {
    this.getVehicle(this.vin);
  }

  getVehicle(vin) {
    this.http.get('https://localhost:7144/api/vehicles/' + vin).subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.vehicle = resultData;
        //Anders wordt getDriver direct uitgevoerd zonder te wachten totdat getVehicle klaar is.
        this.getDriver(this.vehicle.driverId);
      },
      (error) => {
        console.error('Error fetching vehicle:', error);
      }
    );
  }

  getDriver(driverId) {
    this.http
      .get('https://localhost:7144/api/drivers/' + driverId.toString())
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.driver = resultData;
      });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      state: { vin: this.vin },
    });
  }

  onDelete() {
    this.router.navigate(['kopen']);
  }
}
