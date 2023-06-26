import { Component, EventEmitter, Input, Output } from "@angular/core";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'conversation-list',
    templateUrl: './conversation_list.component.html',
    styleUrls: ['./conversation_list.component.css'],
    animations: [
        trigger('fadeInOut', [
          state('in', style({ opacity: 1 })),
          transition(':enter', [
            style({ opacity: 0 }),
            animate('500ms ease-in-out', style({ opacity: 1 }))
          ]),
          transition(':leave', [
            animate('500ms ease-in-out', style({ opacity: 0 }))
          ])
        ]),
        trigger('fadeInOutFast', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [
              style({ opacity: 0 }),
              animate('300ms ease-in-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
              animate('300ms ease-in-out', style({ opacity: 0 }))
            ])
          ])
      ]
  })
export class ConversationListComponent {

    leftColumnRange : number[] = [];
    rightColumnRange : number[] = [];

    listHalfLength : number = 0;
    hasConversationBranch : boolean = false;
    @Output() isSingleColumn = new EventEmitter<boolean>();
    @Input() activeConversationId : number;
    activeConversationIndexSet : Set<number> = new Set();

    startX = 100;
    startY = 100;
    endX = 200;
    endY = 200;


    constructor() {
        this.activeConversationId = -1; // or any other initial value
        const totalItems = this.dummyConversationList.length;
        const midpoint = Math.ceil(totalItems / 2);
        this.leftColumnRange = Array.from({ length: midpoint }, (_, i) => i);
        this.rightColumnRange = Array.from({ length: totalItems - midpoint }, (_, i) => i + midpoint);
    }
    
    dummyConversationList: { id: number, selected: boolean, expanded: boolean, content: string }[] = [
        { id: 1, selected: false, expanded: false, content: 'item 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, selected: false, expanded: false, content: 'item 2 Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.' },
        { id: 3, selected: false, expanded: false, content: 'item 3 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 4, selected: false, expanded: false, content: 'item 4 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 5, selected: false, expanded: false, content: 'item 5 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 6, selected: false, expanded: false, content: 'item 6 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 7, selected: false, expanded: false, content: 'item 7 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 8, selected: false, expanded: false, content: 'item 8 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 9, selected: false, expanded: false, content: 'item 9 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 10, selected: false, expanded: false, content: 'item 10 Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.' },
        { id: 11, selected: false, expanded: false, content: 'item 11 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 12, selected: false, expanded: false, content: 'item 12 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 13, selected: false, expanded: false, content: 'item 13 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 14, selected: false, expanded: false, content: 'item 14 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 15, selected: false, expanded: false, content: 'item 15 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 16, selected: false, expanded: false, content: 'item 16 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 17, selected: false, expanded: false, content: 'item 17 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 18, selected: false, expanded: false, content: 'item 18 Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.' },
        { id: 19, selected: false, expanded: false, content: 'item 19 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 20, selected: false, expanded: false, content: 'item 20 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 21, selected: false, expanded: false, content: 'item 21 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 22, selected: false, expanded: false, content: 'item 22 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 23, selected: false, expanded: false, content: 'item 23 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 24, selected: false, expanded: false, content: 'item 24 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 25, selected: false, expanded: false, content: 'item 25 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 26, selected: false, expanded: false, content: 'item 26 Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.Praesent sed diam sed urna pulvinar ultrices sed sit amet nibh.' },
        { id: 27, selected: false, expanded: false, content: 'item 27 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 28, selected: false, expanded: false, content: 'item 28 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 29, selected: false, expanded: false, content: 'item 29 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 30, selected: false, expanded: false, content: 'item 30 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 31, selected: false, expanded: false, content: 'item 31 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' },
        { id: 32, selected: false, expanded: false, content: 'item 32 Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.Vivamus id tellus a ligula consectetur pretium nec a velit.' }
    ];
    
    handleEventSelect(idSelected : number){
        //console.log("block id " + idSelected + " is selected");
    }

    onAddSideConversation(isSingleColumn : boolean){
        this.hasConversationBranch = !isSingleColumn;
        this.isSingleColumn.emit(!this.hasConversationBranch);
    }


    handleConversationRendering(conversationId : number){
        // only render the conversation that's created by the button
        this.activeConversationIndexSet.add(conversationId);
    }

    getConversationDetail(index : number){
        return this.dummyConversationList[index];
    }

    checkIfConversationIsAdded(index : number){
        return this.activeConversationIndexSet.has(index);
    }

    deleteCurrentConversationHandler(event : number){
        
        this.activeConversationIndexSet.delete(event);
        if(this.activeConversationIndexSet.size === 0){
            this.isSingleColumn.emit(true);
        }
    }

    drawLineBetweenMainAndSideConversation(event : any){
        console.log(event);
        if(event[2] === 0){
            // this.startX = window.innerWidth - event[0];
            // this.startY = window.innerHeight - event[1];
            this.startX = event[0];
            this.startY = event[1];
        }else{
            // this.endX = window.innerWidth - event[0];
            // this.endY = window.innerHeight - event[1];
            this.endX = event[0];
            this.endY = event[1];
        }
    }
}