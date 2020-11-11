import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  private messages:any = [
    {state:'in', author:'Max Musterman', content: 'my sample message in'},
    {state:'out', author:'Max Musterman', content: 'my sample message out'},
    {state:'in', author:'Max Musterman', content: 'my sample reply in'},
    {state:'out', author:'Max Musterman', content: 'my sample reply out'},
    {state:'in', author:'Max Musterman', content: 'my sample message in'},
    {state:'out', author:'Max Musterman', content: 'my sample message out'},
    {state:'in', author:'Max Musterman', content: 'my sample reply in'},
    {state:'out', author:'Max Musterman', content: 'my sample reply out'},
    {state:'in', author:'Max Musterman', content: 'my sample message in'},
    {state:'out', author:'Max Musterman', content: 'my sample message out'},
    {state:'in', author:'Max Musterman', content: 'my sample reply in'},
    {state:'out', author:'Max Musterman', content: 'my sample reply out'},
    {state:'in', author:'Max Musterman', content: 'my sample message in'},
    {state:'out', author:'Max Musterman', content: 'my sample message out'},
    {state:'in', author:'Max Musterman', content: 'my sample reply in'},
    {state:'out', author:'Max Musterman', content: 'my sample reply out'},
    {state:'in', author:'Max Musterman', content: 'my sample message in'},
    {state:'out', author:'Max Musterman', content: 'my sample message out'},
    {state:'in', author:'Max Musterman', content: 'my sample reply in'},
    {state:'out', author:'Max Musterman', content: 'my sample reply out'}
  ]

  @ViewChild('content') private content: any;
  private messageDb: Storage;
  private mTextArea;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.scrollBottom();
    this.messageDb = new Storage({ name:'messages', driverOrder: ['indexeddb'] }, 'sampleStorageId');
  }

  clearTextArea(){
    this.mTextArea='';
  }

  scrollBottom(){
    this.cd.detectChanges();
    this.content.scrollToBottom(100);
  }

  sendMessage(){

    let ts = Date.now().toString();
    let message = this.newMessage('out', 'Max Musterman', this.mTextArea);

    this.messageDb.set(ts, message);
    this.messages.push(message);

    this.scrollBottom();
    this.clearTextArea();

  }

  newMessage(mState, mAuthor, mContent){
    return {
      state: mState,
      author:'Max Musterman',
      content: mContent
    }
  }




}
