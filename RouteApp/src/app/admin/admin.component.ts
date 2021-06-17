
import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  __productService:ProductService
  constructor(ps:ProductService) { 
    this.__productService=ps;
  }
 
  productModel:ProductDetails = new ProductDetails('',0,'');
  
  ngOnInit(): void {
  }

  onSubmit()
  {
    
    console.log(this.productModel.productName);
    this.__productService.addProduct(this.productModel);
 
  }

}
