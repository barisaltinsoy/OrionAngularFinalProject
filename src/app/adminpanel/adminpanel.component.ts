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

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      name: new FormControl(null),
      desc: new FormControl(null)

    });
  }

  onSubmit(){
    const newProduct = {
      name: this.adminForm.get('name').value,
      desc: this.adminForm.get('desc').value
    }
    this.productService.postDataJson(newProduct);
  }

}
