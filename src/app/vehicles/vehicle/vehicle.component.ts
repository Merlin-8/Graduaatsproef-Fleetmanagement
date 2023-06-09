import { ActivatedRoute, Router } from '@angular/router';
// // import { VehiclesService } from './../vehicles.service';
// import { Vehicle } from './../vehicle.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent {
  Vehicle: {
    vinNumber: string;
    licensePlate: string;
    brandModel: string;
    vehicleType: string;
    fuelType: string;
    color: string;
    doors: number;
    driverId: number;
  };

  // Om aan de route te komen waar je momenteel zit
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Op deze manier zou je Id uit route kunnen bemachtigen
  // ngOnInit(){
  //   this.Vehicle = {
  //     vinNumber: this.route.snapshot.params['vinNumber'];
  //   }
  // }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.router.navigate(['kopen']);
  }
}
