import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
 
  __productService:ProductService;
  constructor(ps:ProductService,private cartService:CartService) {
    this.__productService=ps;
   }

  ngOnInit(): void {
  }

  getAllCameras():ProductDetails[]{
    return this.__productService.getAllCameras();
  }

  addToCart(product:ProductDetails){
    this.cartService.addToCart(product);
  }

}