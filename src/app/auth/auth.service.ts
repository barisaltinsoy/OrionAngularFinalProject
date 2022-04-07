import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
    ) { }

  userSignUp(email:string, password:string){
    this.auth.createUserWithEmailAndPassword(email, password).then(()=>{
      this.router.navigate(['/signin']);
    });
  }

  userSignIn(email:string, password:string){
      this.auth.signInWithEmailAndPassword(email, password).then(()=>{
        this.router.navigate(['/products']);
  });

}
}








