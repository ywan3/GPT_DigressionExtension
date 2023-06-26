import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



import { AppComponent } from './app.component';
import { ConversationListComponent } from './component/conversations/conversation_list/conversation_list.component';
import { ConversationBlockComponent } from './component/conversations/conversation_block/conversation_block.component';
import { SearchBarComponent } from './component/inputable/search_bar/search_bar.component';
import { AddConversationButtonComponent } from './component/buttons/add_conversation_button/add_conversation_button.component';
import { DeleteConversationButtonComponent } from './component/buttons/delete_conversation_button/delete_conversation_button.component';
import { SideConversationBlockComponent } from './component/conversations/conversation_block/side_conversation_block/side_conversation_block.component';
import { MainConversationBlockComponent } from './component/conversations/conversation_block/main_conversation_block/main_conversation_block.component';




@NgModule({
  declarations: [
    AppComponent, 
    ConversationListComponent, 
    ConversationBlockComponent, 
    SearchBarComponent,
    AddConversationButtonComponent,
    DeleteConversationButtonComponent,
    SideConversationBlockComponent,
    MainConversationBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}