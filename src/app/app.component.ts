import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemInCart:number;
  user: any;
  posts: any;

  constructor(
    private cartService: CartService,
    public authService: AuthService,
    private http: HttpClientModule,
  ){}

  ngOnInit() {
    // this.authService.auth.user.subscribe(user =>{
    //   this.user = user;
    // })
    console.log(this.authService.auth.user);
    this.cartService.cartItems.subscribe(d=>{
    this.itemInCart = d.length;
    })
  }

  signOut(){
    this.authService.auth.signOut();
  }

  getPosts(){

  }
}
