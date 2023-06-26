import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'add-conversation-button',
    templateUrl: './add_conversation_button.component.html',
    styleUrls: ['./add_conversation_button.component.css']
  })
export class AddConversationButtonComponent {

    @Output() conversationIdEmitter = new EventEmitter<number>();
    @Output() isSingleColumnEmitter = new EventEmitter<boolean>();
    @Input() conversationId = -1;

    constructor(){

    }

    onAddSideConversation(){
        this.conversationIdEmitter.emit(this.conversationId);
        this.isSingleColumnEmitter.emit(false);
    }


}