import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  passwordResetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient,public router: Router) {}

  ngOnInit(): void {
    this.passwordResetForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.passwordResetForm.valid) {
      const formData = this.passwordResetForm.value;
      
      const authToken = localStorage.getItem('access_token');
      
      if (!authToken) {
        return;
      }
      
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      });
  
      this.http.put('http://localhost:8080/api/user/update/password', formData, { headers })
        .subscribe(
          (response) => {
            console.log('Password updated successfully:', response);
            this.router.navigateByUrl('/')
          },
          (error) => {
            console.error('Error updating password:', error);
            this.router.navigateByUrl('/')

          }
        );
    } else {
      console.log("error")
    }
  }
  
}
