import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout'

import { MdButtonModule, MdCheckboxModule, MdDatepickerModule,
  MdInputModule, MdRadioModule, MdSelectModule, MdSliderModule,
  MdSlideToggleModule, MdToolbarModule, MdListModule, MdGridListModule,
  MdCardModule, MdIconModule, MdProgressSpinnerModule, MdDialogModule, MdSlider, MdInputContainer, MdHint, MdCalendar } from '@angular/material';



  import { RestangularModule, Restangular } from 'ngx-restangular';
  import { RestangularConfigFactory } from './shared/restConfig';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

import { BadgeService } from './services/badge.service';
import { RoutineService } from './services/routine.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import 'hammerjs';

@NgModule({

  

  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MdButtonModule, MdCheckboxModule, MdDatepickerModule,
    MdInputModule, MdRadioModule, MdSelectModule, MdSliderModule,
    MdSlideToggleModule, MdToolbarModule, MdListModule, MdGridListModule,
    MdCardModule, MdIconModule, MdProgressSpinnerModule, MdDialogModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [BadgeService, RoutineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
