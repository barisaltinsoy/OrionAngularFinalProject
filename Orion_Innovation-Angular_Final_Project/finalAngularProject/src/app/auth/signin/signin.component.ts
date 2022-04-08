import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    // Signin email & password validators.
  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }

  onSignIn(){
    const { email, password } = this.formData.value;
    this.authService.userSignIn(email, password)
    localStorage.setItem('user', this.formData.get('email').value);
  }

}
