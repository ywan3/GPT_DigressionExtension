import { Component, EventEmitter, ElementRef, Input, Output, Renderer2, AfterViewInit} from "@angular/core";



@Component({
    selector: 'side-conversation-block',
    templateUrl: './side_conversation_block.component.html',
    styleUrls: ['./side_conversation_block.component.css']
  })
export class SideConversationBlockComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    
    @Input() item : any;
    @Input() activeConversationId : any;
    @Output() idSelected = new EventEmitter<number>();
    @Output() deleteConversationEventEmitter = new EventEmitter<number>();
    @Output() componentCoordinateEventEmitter = new EventEmitter<number[]>();
    isExpanded : boolean = false;
    isPinned = false;   
    xCoordinate : number = -100;
    yCoordinate : number = -100;
    

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


    ngAfterViewInit(){
      this.componentCoordinateEventEmitter.emit(this.getCoordinates());
    }

    getTextareaMaxHeight(): string {
        if (this.isExpanded) {
          return '100%'; // Set the desired maximum height when expanded
        } else {
          return '50%'; // Set the desired maximum height when unexpanded
        }
      }

    deleteCurrentConversation(event : number){
        this.deleteConversationEventEmitter.emit(this.item.id - 1);
    }

    getCoordinates() {
      const element = this.elementRef.nativeElement;
      const rect = element.getBoundingClientRect();
      const x = rect.left;
      const y = rect.top;
    
      // Pass the coordinates to other methods or properties in your component as needed
      // For example, you can assign them to component properties:
      return [x, y, 1];
    }
}