import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css']
})
export class MobilePhoneComponent implements OnInit {
  __productService:ProductService;
  constructor(ps:ProductService,private cartService:CartService) {
    this.__productService=ps;
   }

  ngOnInit(): void {
  }

  getAllMobiles():ProductDetails[]{
    return this.__productService.getAllMobiles();
  }

  addToCart(product:ProductDetails){
    this.cartService.addToCart(product);
  }
}