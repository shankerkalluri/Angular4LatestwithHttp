import {Component, Input} from '@angular/core';

@Component({
    selector:'appchild',
    template:'<h2>{{message}}</h2>'
    
})


export class AppChildComponent{
    
    @Input() message: string ;
    
   
}