import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  private messages:any = []
  private channel:string

  @ViewChild('content') private content: any;
  private messageDb: Storage;
  private mTextArea;

  constructor(private cd:ChangeDetectorRef,public nav: NavController, private aroute:ActivatedRoute ) { }

  ngOnInit() {
    //this.scrollBottom();
    
    this.channel = this.aroute.snapshot.paramMap.getAll("channel")[0]


    this.messageDb = new Storage({ name:this.channel, driverOrder: ['indexeddb'] }, 'sampleStorageId');
    this.messageDb.forEach((value, key) => {
      this.messages.push(value)
      //console.log(value, key)
    });



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
