import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getDataJson().subscribe(res =>{
      this.products = res;
    })
    this.route.params.subscribe(params => {
      if(params?.['searchTerm'])
        this.products = this.productService.getProducts().filter(product => product.name.toLowerCase().includes(params?.['searchTerm'].toLowerCase()))
    });
    this.products = this.productService.getProducts();
  }
}
