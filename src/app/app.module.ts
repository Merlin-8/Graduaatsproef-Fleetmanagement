import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehicleNavigationComponent } from './vehicles/vehicle-navigation/vehicle-navigation.component';
import { VehicleEditComponent } from './vehicles/vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleNewComponent } from './vehicles/vehicle-new/vehicle-new.component';
import { DriversComponent } from './drivers/drivers.component';
import { GascardsComponent } from './gascards/gascards.component';
import { GascardDetailComponent } from './gascards/gascard-detail/gascard-detail.component';
import { GascardNavigationComponent } from './gascards/gascard-navigation/gascard-navigation.component';
import { GascardEditComponent } from './gascards/gascard-detail/gascard-edit/gascard-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    MainNavigationComponent,
    DriversComponent,
    GascardsComponent,
    GascardDetailComponent,
    GascardNavigationComponent,
    GascardEditComponent,
    VehicleComponent,
    VehicleNavigationComponent,
    HomeComponent,
    VehicleEditComponent,
    VehicleNewComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
