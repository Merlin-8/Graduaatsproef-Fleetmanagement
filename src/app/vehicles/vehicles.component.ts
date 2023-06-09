import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle.model';
// import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [
    new Vehicle("VIN001", "ABC123", "Toyota Camry", "Sedan", "Petrol", "Silver", 4, 1),
    new Vehicle("VIN002", "DEF456", "Honda Civic", "Sedan", "Petrol", "Blue", 4, 2),
    new Vehicle("VIN003", "GHI789", "Ford Mustang", "Sports Car", "Petrol", "Red", 2, 3),
    new Vehicle("VIN004", "JKL012", "Chevrolet Silverado", "Pickup Truck", "Diesel", "Black", 2, 4),
    new Vehicle("VIN005", "MNO345", "Volkswagen Golf", "Hatchback", "Petrol", "White", 4, 5),
    new Vehicle("VIN006", "PQR678", "BMW 3 Series", "Sedan", "Petrol", "Gray", 4, 6),
    new Vehicle("VIN007", "STU901", "Mercedes-Benz C-Class", "Sedan", "Petrol", "Black", 4, 7),
    new Vehicle("VIN008", "VWX234", "Audi Q5", "SUV", "Petrol", "Blue", 4, 8),
    new Vehicle("VIN009", "YZA567", "Subaru Outback", "Wagon", "Petrol", "Green", 4, 9),
    new Vehicle("VIN010", "BCD890", "Mazda CX-5", "SUV", "Petrol", "Red", 4, 10),
    new Vehicle("VIN011", "EFG123", "Jeep Wrangler", "SUV", "Petrol", "Yellow", 4, 11),
    new Vehicle("VIN012", "HIJ456", "Tesla Model S", "Electric", "Red", "Electric", 4, 12),
    new Vehicle("VIN013", "KLM789", "Nissan Altima", "Sedan", "Petrol", "Silver", 4, 13),
    new Vehicle("VIN014", "NOP012", "Ford F-150", "Pickup Truck", "Petrol", "White", 2, 14),
    new Vehicle("VIN015", "QRS345", "Toyota RAV4", "SUV", "Petrol", "Blue", 4, 15),
    new Vehicle("VIN016", "TUV678", "Honda Accord", "Sedan", "Petrol", "Black", 4, 16),
    new Vehicle("VIN017", "WXY901", "Chevrolet Corvette", "Sports Car", "Petrol", "Red", 2, 17),
    new Vehicle("VIN018", "ZAB234", "Volkswagen Tiguan", "SUV", "Petrol", "Gray", 4, 18),
    new Vehicle("VIN019", "CDE567", "BMW X5", "SUV", "Petrol", "White", 4, 19),
    new Vehicle("VIN020", "FGH890", "Audi A4", "Sedan", "Petrol", "Silver", 4, 20)
  ];

  constructor(){

  }

  ngOnInit() {
  }
}
