import { Injectable } from '@angular/core';



@Injectable()

export class DataService {
    
    
    constructor() { }
    
    getProjectName() {
        return '1800-11-27-37';
    }
	
	getTasks(): any{
		return [
				{
				'name':"Time Zone", 
				"des":"Travel Time Calculator", 
				"weather":"Weather",
				"time":"Currency Convertor"
				}
				
			]
		
		} 
	
}