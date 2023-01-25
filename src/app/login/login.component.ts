import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl("");
  password = new FormControl("");

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(event:any){
    console.log(event.key)
    if(event.key =="Enter"){

    alert("megnyomtad az entert")}

  }

}
