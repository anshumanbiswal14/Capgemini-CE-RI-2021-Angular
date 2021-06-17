import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  // 
  
  getAllProducts():ProductDetails[]{
    return this.cartService.getAllProducts();
  }
}

