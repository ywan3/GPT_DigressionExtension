import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';





@Injectable()
export class QueryService {
  
  apiUrl : string;
  
  constructor(private client : HttpClient, @Inject('environment') private env: any) {
    this.apiUrl = env.SERVICE_URL;
    
  }

  submitPrompt(conversation_id : number, prompt_id : number, ask_prompt : string){

    var promptSubmitUrl = this.apiUrl + "";
    this.client.get(this.apiUrl).subscribe(data => {
        
      }, error => {
        // Handle the error
      });
  }


  getNewConversationId() : number{
    return 1;
  }

  // 添加 QueryService 的方法和逻辑
}