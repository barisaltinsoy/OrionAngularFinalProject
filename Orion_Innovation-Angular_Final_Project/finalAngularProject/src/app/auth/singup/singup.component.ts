import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  }, {
    validators: this.passwordMatch
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

      // Signin email & password validators + match check.
  ngOnInit(): void {
  }

  passwordMatch(formGroup: FormGroup){
    const { password, passwordConfirm } = formGroup.value;

    if(password != passwordConfirm)
      return { notMatch: true}
    else
      return null;
  }

  onSignUp(){
    const {email, password} = this.formData.value;
    this.authService.userSignUp(email, password)
  }


}
