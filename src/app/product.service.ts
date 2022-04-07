import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products: Product[] = [
      new Product(
        1,
        'Product1',
        'Desc1',
        25,
        1,
        ['assets/bbq1.jpg', 'assets/bbq2.jpg', 'assets/bbq3.jpg'],
      ),
      new Product(
        2,
        'Product2',
        'Desc2',
        15,
        1,
        ['assets/masat1.jpg', 'assets/masat2.jpg', 'assets/masat3.jpg'],
      ),
      new Product(
        3,
        'Product3',
        'Desc3',
        10,
        1,
        ['assets/knife1.jpg', 'assets/knife2.jpg', 'assets/knife3.jpg'],
      )
    ]
  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product=>
      product.id === id);
  }

  getDataJson(){
    return this.http.get('http://localhost:3000/posts');
  }

  postDataJson(product){
    this.http.post('http://localhost:3000/posts', product).subscribe();
  }

}
