import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  accounts: Account[] = [{account:"alo123",password:"alo123"}]

  loginForm = new FormGroup({
      account: new FormControl("",[Validators.required,Validators.minLength(3)]),
      password: new FormControl("",[Validators.required,Validators.minLength(3)]),
  })

  check(){
    console.log("aloxo")
  }


  get account(){
    return this.loginForm.get('account')
  }
  get password(){
    return this.loginForm.get('password')
  }

}
