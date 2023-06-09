export class VehiclesService{
    private vehicles = [
            { vinNumber: "VIN001", licensePlate: "ABC123", brandModel: "Toyota Camry", vehicleType: "Sedan", fuelType: "Petrol", color: "Silver", doors: 4, driverId: 1 },
            { vinNumber: "VIN002", licensePlate: "DEF456", brandModel: "Honda Civic", vehicleType: "Sedan", fuelType: "Petrol", color: "Blue", doors: 4, driverId: 2 },
            { vinNumber: "VIN003", licensePlate: "GHI789", brandModel: "Ford Mustang", vehicleType: "Sports Car", fuelType: "Petrol", color: "Red", doors: 2, driverId: 3 },
            { vinNumber: "VIN004", licensePlate: "JKL012", brandModel: "Chevrolet Silverado", vehicleType: "Pickup Truck", fuelType: "Diesel", color: "Black", doors: 2, driverId: 4 },
            { vinNumber: "VIN005", licensePlate: "MNO345", brandModel: "Volkswagen Golf", vehicleType: "Hatchback", fuelType: "Petrol", color: "White", doors: 4, driverId: 5 },
            { vinNumber: "VIN006", licensePlate: "PQR678", brandModel: "BMW 3 Series", vehicleType: "Sedan", fuelType: "Petrol", color: "Gray", doors: 4, driverId: 6 },
            { vinNumber: "VIN007", licensePlate: "STU901", brandModel: "Mercedes-Benz C-Class", vehicleType: "Sedan", fuelType: "Petrol", color: "Black", doors: 4, driverId: 7 },
            { vinNumber: "VIN008", licensePlate: "VWX234", brandModel: "Audi Q5", vehicleType: "SUV", fuelType: "Petrol", color: "Blue", doors: 4, driverId: 8 },
            { vinNumber: "VIN009", licensePlate: "YZA567", brandModel: "Subaru Outback", vehicleType: "Wagon", fuelType: "Petrol", color: "Green", doors: 4, driverId: 9 },
            { vinNumber: "VIN010", licensePlate: "BCD890", brandModel: "Mazda CX-5", vehicleType: "SUV", fuelType: "Petrol", color: "Red", doors: 4, driverId: 10 },
            { vinNumber: "VIN011", licensePlate: "EFG123", brandModel: "Jeep Wrangler", vehicleType: "SUV", fuelType: "Petrol", color: "Yellow", doors: 4, driverId: 11 },
            { vinNumber: "VIN012", licensePlate: "HIJ456", brandModel: "Tesla Model S", vehicleType: "Electric", fuelType: "Red", color: "Electric", doors: 4, driverId: 12 },
            { vinNumber: "VIN013", licensePlate: "KLM789", brandModel: "Nissan Altima", vehicleType: "Sedan", fuelType: "Petrol", color: "Silver", doors: 4, driverId: 13}
    ]

getVehicles(){
    return this.vehicles;
}

getVehicle(licensePlate: string){
    return this.vehicles.find(vehicle => vehicle.licensePlate === licensePlate);
}

updateVehicle(vinNumber: string, licensePlate: string, brandModel: string, vehicleType: string, fuelType: string, color: string, doors: number, driverId: number){
    const vehicle = this.vehicles.find(vehicle => vehicle.vinNumber === vinNumber);
    if(vehicle){
        vehicle.licensePlate = licensePlate;
        vehicle.brandModel = brandModel;
        vehicle.vehicleType = vehicleType;
        vehicle.fuelType = fuelType;
        vehicle.color = color;
        vehicle.doors = doors;
        vehicle.driverId = driverId;
    }
}

}