import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Observable} from 'rxjs/RX';
import {Task} from './task';

//import {HeaderComponent} from './header/header.component';
//import {SliderComponent} from './slider/slider.component';
//import {NavigationComponent} from './navigation/navigation.component';
//import {FooterComponent} from './footer/footer.component';


@Component({ 
  selector: 'app-container',
  
  templateUrl: 'src/app/app.component.html'
	
  
})
export class AppComponent implements OnInit{
  
    imgWidth = 50;
    imgMargin = 50;
    
    title = 'Tasks';
    
    tasks: Task[];
    errorMessage: any[];
    
    constructor(private dataService:DataService){}
    
    ngOnInit(){
        
        this.dataService.getTasks().subscribe(
        
            tasks => {this.tasks = tasks; console.log(this.tasks)},
            error => {this.errorMessage = <any>error}
        
        )
    }
    
    /*
        //Output data
    parentfunction(data){
        alert(data);
    }*/
    
    height = 100;
    width = 100;
    
    sayHello(){
        alert(this.title);
    }
}


