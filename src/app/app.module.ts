import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppChildComponent} from './appchild.component';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

//import {HeaderComponent} from './header/header.component';
//import {SliderComponent} from './slider/slider.component';
//import {NavigationComponent} from './navigation/navigation.component';
//import { DataService } from './services/data.service';
//import {FooterComponent} from './footer/footer.component';

import { AppComponent }  from './app.component';
import {DataService} from './data.service';




@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, AppChildComponent],
  providers:    [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }