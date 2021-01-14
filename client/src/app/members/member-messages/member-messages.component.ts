import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {

  messages: Message[];
  @Input() username: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessage();
  }
  
  loadMessage() {
    this.messageService.getMessageThread(this.username).subscribe(message => {
      this.messages=message;
    })
  }

}
