export class ProductDetails {
productName:string;
productCost:number;
productCategory:string;

    constructor(productName:string,productCost:number,productCategory:string)
    {
        this.productName = productName;
        this.productCost = productCost;
        this.productCategory = productCategory;
    }
}
