import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {authService} from "../services/auth.service";
import {LoginRequest} from "../model/LoginRequest";
import {RegisterRequest} from "../model/RegisterRequest";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
  registerForm!: FormGroup;
  username!: string;
  password!: string;
  token!: string;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: authService,
    private route: Router
  ){}
  ngOnInit() {
    this.SignupForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      numTel: ['', Validators.required],
    });
    this.LoginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }
  LoginForm!: FormGroup;
  SignupForm!: FormGroup;

  login() {
    this.authenticationService.login(
      new LoginRequest(this.LoginForm.value['username'],
        this.LoginForm.value['password']));
  }
  register() {

    this.authenticationService.register(new RegisterRequest(
        this.SignupForm.value['firstname'],
        this.SignupForm.value['lastname'],
        this.SignupForm.value['username'],
        this.SignupForm.value['email'],
        this.SignupForm.value['numTel'],
        this.SignupForm.value['password'],
      )
    );
  }
}

