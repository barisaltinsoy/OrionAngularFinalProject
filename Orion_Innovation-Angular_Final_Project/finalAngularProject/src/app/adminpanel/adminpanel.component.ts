import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  adminForm: FormGroup;
  constructor(
    private productService: ProductService,
  ) { }

  // Form Control for Admin Panel
  ngOnInit(): void {
    this.adminForm = new FormGroup({
      name: new FormControl(null),
      desc: new FormControl(null),
      price:new FormControl(null),
      qty: new FormControl(null),
      imgUrls:new FormControl(null)
    });
  }

  // Submit for Admin Panel
  onSubmit(){
    const newProduct = {
      name: this.adminForm.get('name').value,
      desc: this.adminForm.get('desc').value,
      price: this.adminForm.get('price').value,
      qty: this.adminForm.get('desc').value,
      imgUrls: this.adminForm.get('imgUrls').value,
    }
    // Json Data Method
    this.productService.postDataJson(newProduct);
  }

}
