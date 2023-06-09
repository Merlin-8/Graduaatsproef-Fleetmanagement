export class Gascard{
    public cardNumber: string;
    public ExpiringDate: Date;
    public Pincode: number;
    public Blocked: boolean;
    public FuelType: string;
    public DriverId: number;

    constructor(cardNumber: string, expiringDate: Date, pincode: number, blocked: boolean, fuelType: string, driverId: number){
        this.cardNumber = cardNumber;
        this.ExpiringDate = expiringDate;
        this.Pincode = pincode;
        this.Blocked = blocked;
        this.FuelType = fuelType;
        this.DriverId = driverId;
    }
}