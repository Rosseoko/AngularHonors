import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 

import { MdButtonModule, MdCheckboxModule, MdDatepickerModule,
  MdInputModule, MdRadioModule, MdSelectModule, MdSliderModule,
  MdSlideToggleModule, MdToolbarModule, MdListModule, MdGridListModule,
  MdCardModule, MdIconModule, MdProgressSpinnerModule, MdDialogModule, MdSlider, MdInputContainer, MdHint } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';

import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
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

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
