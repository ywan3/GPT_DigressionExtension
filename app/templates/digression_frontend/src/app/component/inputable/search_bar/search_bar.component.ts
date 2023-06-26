import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'search-bar',
    templateUrl: './search_bar.component.html',
    styleUrls: ['./search_bar.component.css']
  })
export class SearchBarComponent {
    @Input() isSingleColumn = true;
    
    onSubmitPrompt(event: any){
        console.log("submitted payload : " + JSON.stringify(event));
    }
    
}