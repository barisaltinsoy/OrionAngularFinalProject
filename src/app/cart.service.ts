import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  placeholder = [];
  cartItems = new BehaviorSubject([]);
  constructor() {
    const ls = this.getCartData();
    if(ls)
      this.cartItems.next(ls);
   }

  addItem(product:Product) {

    const ls = this.getCartData();
    let exist:Product;
    if(ls)
    exist = ls.find((item)=>{
      return item.id === product.id;
    });

    if(exist){
      exist.qty++;
      this.setCartData(ls);
    }
    else{
      if(ls){
        const newData = [...ls, product];
        this.setCartData(newData);
        this.cartItems.next(this.getCartData())
      }else{
        this.placeholder.push(product);
        this.setCartData(this.placeholder);
        this.cartItems.next(this.getCartData());
      }
    }

  }
  setCartData(data:any){
    localStorage.setItem('cart', JSON.stringify(data));
  }
  getCartData(){
    return JSON.parse(localStorage.getItem('cart'))
  }
}
