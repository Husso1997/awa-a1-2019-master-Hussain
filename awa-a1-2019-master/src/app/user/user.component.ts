import { Component, OnInit } from '@angular/core';
import {UserService} from "../message/shared/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {map} from "rxjs/operators";
import {MessageService} from "../message/shared/message.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  userList:any[];
  morse = new FormGroup({
    msg: new FormControl('')});
  messages:string[];

  constructor(private userService:UserService, private messageService:MessageService) { }

  ngOnInit() {
    this.getMessages();
    this.getUsers();
  }
  getMessages()
  {
    this.messageService.getMessages().subscribe(msgs => {this.messages = msgs});
  }
  addMsg()
  {
    const object = this.morse.value;
    console.log(object);
    this.messageService.addMessage(new Date(), object.msg).then(test => {console.log('I ADDED A MSG')});
  }

  addUser():void
  {
    const user = this.userForm.value;
    this.userService.addUser(user).then( done => {console.log('Saved')},
    failed => {console.log('failed')});
  }

  getUsers():void
  {

    this.userService.getUsers().subscribe(value => {this.userList = value, console.log(value)})


  }

  deleteUser(id:string):void
  {
    console.log(id);
    this.userService.removeUser(id).then(s => {console.log('finally')}, f => {console.log('noob')});
  }

}
