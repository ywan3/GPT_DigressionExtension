import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'conversation-block',
    templateUrl: './conversation_block.component.html',
    styleUrls: ['./conversation_block.component.css']
  })
export class ConversationBlockComponent {

    constructor() {
        
      }
    
    @Input() item : any;
    @Input() activeConversationId : any;
    @Output() idSelected = new EventEmitter<number>();
    isExpanded : boolean = false;
    isPinned = false;
    

    startHover() {
        
        this.isExpanded = true;
      }

    endHover(){
        
        if (!this.isPinned) {
            // Expand the div on hover
            this.isExpanded = false;
          }
    }


    onClick() {
        
        this.isPinned = !this.isPinned;
        if (!this.isPinned) {
          // Toggle the expanded/shrinked state
          this.isExpanded = ! this.isExpanded;
        }
    }

    getTextareaMaxHeight(): string {
        if (this.isExpanded) {
          return '100%'; // Set the desired maximum height when expanded
        } else {
          return '50%'; // Set the desired maximum height when unexpanded
        }
      }

}