import {Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({

	selector:'header-component',
	templateUrl:'app/header/header.component.html'
	
})

export class HeaderComponent implements OnInit{

	/*projectName: string;

    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.projectName = this.dataService.getProjectName();
    }*/
	
	
	tasks : any [] = [];
	
	constructor(private dataService:DataService){}
	
	ngOnInit() { 
        this.tasks = this.dataService.getTasks();
    }
	

}


