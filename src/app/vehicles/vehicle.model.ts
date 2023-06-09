export class Vehicle{
    public vinNumber: string;
    public licensePlate: string;
    public brandModel: string;
    public vehicleType: string;
    public fuelType: string;
    public color: string;
    public doors: number;
    public driverId: number;

    constructor(vinNumber: string, licensePlate: string, brandModel: string, vehicleType: string, fuelType: string, color: string, doors: number, driverId: number){
        this.vinNumber = vinNumber;
        this.licensePlate = licensePlate;
        this.brandModel = brandModel;
        this.vehicleType = vehicleType;
        this.fuelType = fuelType;
        this.color = color;
        this.doors = doors;
        this.driverId = driverId;
    }
}