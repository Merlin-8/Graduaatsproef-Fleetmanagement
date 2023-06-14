import { Component } from '@angular/core';
import { Gascard } from './gascard.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gascards',
  templateUrl: './gascards.component.html',
  styleUrls: ['./gascards.component.css'],
})
export class GascardsComponent {
  gascards: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllGascards();
  }

  getAllGascards() {
    this.http
      .get('https://localhost:7144/api/gascards/')
      .subscribe((result: any) => {
        console.log(result);
        this.gascards = result;
      });
  }
}
