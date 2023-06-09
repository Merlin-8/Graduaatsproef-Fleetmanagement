import { Component } from '@angular/core';
import { Gascard } from '../gascard.model';

@Component({
  selector: 'app-gascard-detail',
  templateUrl: './gascard-detail.component.html',
  styleUrls: ['./gascard-detail.component.css']
})
export class GascardDetailComponent {
  Gascard: Gascard;
}
