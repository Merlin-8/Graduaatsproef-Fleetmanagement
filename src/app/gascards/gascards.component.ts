import { Component } from '@angular/core';
import { Gascard } from './gascard.model';

@Component({
  selector: 'app-gascards',
  templateUrl: './gascards.component.html',
  styleUrls: ['./gascards.component.css']
})
export class GascardsComponent {
gascards : Gascard[] = [
  new Gascard('123456789', new Date(2020, 11, 1), 1234, false, 'Diesel', 1),
  new Gascard('987654321', new Date(2022, 3, 15), 4321, false, 'Petrol', 2),
  new Gascard('456789123', new Date(2023, 8, 10), 5678, false, 'Electric', 3),
  new Gascard('789123456', new Date(2024, 5, 20), 8765, false, 'Petrol', 4),
  new Gascard('321654987', new Date(2022, 1, 5), 9876, true, 'Diesel', 5),
  new Gascard('654321789', new Date(2023, 7, 12), 3456, false, 'Petrol', 6),
  new Gascard('987123456', new Date(2025, 2, 25), 6543, false, 'Diesel', 7),
  new Gascard('789456123', new Date(2024, 10, 8), 2345, false, 'Petrol', 8),
  new Gascard('456321789', new Date(2023, 12, 31), 7654, true, 'Electric', 9),
  new Gascard('123789456', new Date(2022, 6, 18), 3456, false, 'Petrol', 10)
];
};

