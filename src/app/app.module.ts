import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from "highcharts-angular";
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { StorageComponent } from './pages/storage/storage.component';
import { StorageModalComponent } from './pages/storage/components/storage-modal/storage-modal.component';
import { StorageDetailsComponent } from './pages/storage-details/storage-details.component';
import { GrainsectionModalComponent } from './pages/storage-details/components/grainsection-modal/grainsection-modal.component';
import { GrainsectionDetailsComponent } from './pages/grainsection-details/grainsection-details.component';
import { TermosectionGraphComponent } from './pages/grainsection-details/components/termosection-graph/termosection-graph.component';
import { LoaderComponent } from './layouts/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StorageComponent,
    StorageModalComponent,
    StorageDetailsComponent,
    GrainsectionModalComponent,
    GrainsectionDetailsComponent,
    TermosectionGraphComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HighchartsChartModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
