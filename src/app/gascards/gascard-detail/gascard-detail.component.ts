import { Component, OnInit } from '@angular/core';
import { Gascard } from '../gascard.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gascard-detail',
  templateUrl: './gascard-detail.component.html',
  styleUrls: ['./gascard-detail.component.css'],
})
export class GascardDetailComponent implements OnInit {
  gascard: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['cardNumber'];
  }
}
