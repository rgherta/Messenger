import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  show_messages: boolean=true;

  constructor(public nav: NavController) { }

  ngOnInit() {
  }


  testFab(){
    console.log("fab clicked");
  }


  openChat(){
    console.log("message-peer");
    this.nav.navigateForward(['/message'],{animated:true, animationDirection:"forward"})
  }

  segmentChanged(event:any){
    
    switch( event.detail.value ) {
      case 'messages':{
        this.show_messages=true;
        console.log('segment changed ', event.detail.value, this.show_messages );
        break;
      }
      case 'calls':{
        this.show_messages=false;
        console.log('segment changed ', event.detail.value, this.show_messages )
        break;
      }

    }

  }

}
