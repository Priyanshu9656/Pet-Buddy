import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { AddpetComponent } from './Components/addpet/addpet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './Components/home/home.component';
import { SpacesNearComponent } from './Components/spaces-near/spaces-near.component';
import { CustomSpaceComponent } from './Components/custom-space/custom-space.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PreviewComponent } from './Components/preview/preview.component';
import { GridComponent } from './Components/grid/grid.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { environmentReducer, petReducer, spacesReducer, toyReducer, toyTypeReducer } from './Store/reducer';
import { PaymentPrevComponent } from './payment-prev/payment-prev.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpaceComponent } from './Components/space/space.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddpetComponent,
    MainScreenComponent,
    HomeComponent,
    SpacesNearComponent,
    CustomSpaceComponent,
    PaymentComponent,
    PreviewComponent,
    GridComponent,
    DateTimeComponent,
    PaymentPrevComponent,
    SpaceComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({pets : petReducer , spaces : spacesReducer, toy : toyReducer , toytype : toyTypeReducer , enviroment : environmentReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // number of states to keep
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
