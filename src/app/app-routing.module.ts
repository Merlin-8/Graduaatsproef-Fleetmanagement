import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { GascardDetailComponent } from './gascards/gascard-detail/gascard-detail.component';
import { GascardsComponent } from './gascards/gascards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VehicleNewComponent } from './vehicles/vehicle-new/vehicle-new.component';
import { VehicleEditComponent } from './vehicles/vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'vehicles/new', component: VehicleNewComponent},
    {path: 'vehicles/:licensePlate', component: VehicleComponent},
    {path: 'vehicles/:licensePlate/edit', component: VehicleEditComponent},,
    {path: 'drivers', component: DriversComponent},
    {path: 'gascards', component: GascardsComponent},
    {path: 'gascards/:cardNumber', component: GascardDetailComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '/not-found'},
    
  ];

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
],

exports: [RouterModule]
})
// Exports vertelt angular, van deze module als ik deze module zou toevoegen aan de import van een andere module
// wat zou toeganglijk moeten zijn voor deze module die deze module import
export class AppRoutingModule{

}