import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css'],
})
export class VehicleEditComponent implements OnInit {
  vehicle: any;
  vin: string;
  driver: any;
  drivers: any[] = [];

  availableDrivers = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {
    this.vin = history.state.vin;
  }

  ngOnInit() {
    this.getVehicle(this.vin);
  }

  async getVehicle(vin) {
    try {
      const response = await this.http
        .get('https://localhost:7144/api/vehicles/' + vin)
        .toPromise();
      this.vehicle = response;
      this.getDriver(this.vehicle.driverId);
    } catch (error) {
      console.error('Error ophalen van vehicle:', error);
    }
  }

  async getDriver(driverId) {
    try {
      const response = await this.http
        .get('https://localhost:7144/api/drivers/' + driverId.toString())
        .toPromise();
      this.driver = response;
      console.log(response);
      this.getDrivers();
    } catch (error) {
      console.error('Error fetching the driver:', error);
    }
  }

  getDrivers() {
    try {
      this.http
        .get('https://localhost:7144/api/drivers/')
        .subscribe((result: any) => {
          this.drivers = result;
          this.filterDrivers();
        });
    } catch (error) {
      console.error('Error fetching the drivers:', error);
    }
  }

  filterDrivers() {
    this.availableDrivers = this.drivers.filter(
      (driver) => driver.vehicleVin === null
    );
  }

  async onSubmit() {
    const updatedVehicle = {
      vin: this.vehicle.vin,
      brandModel: this.vehicle.brandModel,
      licensePlate: this.vehicle.licensePlate,
      fuelType: this.vehicle.fuelType,
      vehicleType: this.vehicle.vehicleType,
      color: this.vehicle.color,
      doors: this.vehicle.doors,
      driverId: this.vehicle.driverId === '0' ? null : this.vehicle.driverId,
    };

    const url = 'https://localhost:7144/api/vehicles/';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    try {
      const response = await this.http
        .put(url, JSON.stringify(updatedVehicle), httpOptions)
        .toPromise();
      console.log('vehicle updated successfully:', response);
    } catch (error) {
      console.error('Error while updating vehicle:', error);
    }
  }

  onCancel() {
    this.location.back();
  }
}
