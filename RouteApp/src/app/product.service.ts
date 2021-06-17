import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  laptopList:ProductDetails[]=[];
  cameraList:ProductDetails[]=[];
  mobileList:ProductDetails[]=[];

  addProduct(product:ProductDetails){
    if(product.productCategory == 'Laptop'){
      this.laptopList.push(product);
      console.log(this.laptopList.length);
    }
    else if(product.productCategory == 'Camera'){
      this.cameraList.push(product);
      console.log(this.cameraList.length);
    }
    else {
      this.mobileList.push(product);
      console.log(this.mobileList.length);
    }
  }
  
  getAllLaptops():ProductDetails[]{
    console.log("inside service laptop"+this.laptopList.length);
    return this.laptopList;
  }

  getAllCameras():ProductDetails[]{
    console.log("inside service camera"+this.cameraList.length);
    return this.cameraList;
  }

  getAllMobiles():ProductDetails[]{
    console.log("inside service mobile"+this.mobileList.length);
    return this.mobileList;
  }
}
