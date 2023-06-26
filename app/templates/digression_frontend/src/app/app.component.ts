import { AfterViewInit, Component, ElementRef, Input, Renderer2} from '@angular/core';
import {ConversationListComponent} from './component/conversations/conversation_list/conversation_list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
  title = 'digression_frontend';
  @Input() activeConversationId : number = -1;
  isSingleColumn = true;



  ngAfterViewInit() {
    const textareas = this.el.nativeElement.querySelectorAll('.textarea-wrapper textarea');

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
      const maxLines = 10;
      const maxHeight = lineHeight * maxLines;

      textarea.style.height = lineHeight + 'px';
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
    };

    textareas.forEach((textarea: EventTarget | null) => {
      if (textarea instanceof HTMLTextAreaElement) {
        textarea.addEventListener('input', (event) => {
          adjustTextareaHeight(event.target as HTMLTextAreaElement);
        });

        adjustTextareaHeight(textarea as HTMLTextAreaElement);
      }
    });
  }

  isSingleColumnHandler(event : any){
    this.isSingleColumn = event;
  }

  getIsSingleColumn(): boolean {
    return this.isSingleColumn;
  }
}
