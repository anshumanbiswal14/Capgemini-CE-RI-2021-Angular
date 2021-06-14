import { Injectable } from '@angular/core';
import { LoanDetails } from './loan-details';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  imageRootPath='assets/HomeLoanImage/'
  getAllDetails():LoanDetails[]
  {
    let BronzePack : LoanDetails ={
      loanName:'Bronze Home Loan',
      loanCost:45000,
      loanRating:'3.5',
      loanInterest:5,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/House.PNG'
    }

    let SilverPack : LoanDetails ={
      loanName:'Silver Home Loan',
      loanCost:55000,
      loanRating:'3.5',
      loanInterest:10,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/House2.PNG'
    }

    let GoldPack : LoanDetails ={
      loanName:'Gold Home Loan',
      loanCost:65000,
      loanRating:'4.0',
      loanInterest:15,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/House3.PNG'
    }

    let TitaniumPack : LoanDetails ={
      loanName:'Titanium Home Loan',
      loanCost:85000,
      loanRating:'5.0',
      loanInterest:20,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/House.PNG'
    }
    return[BronzePack,SilverPack,GoldPack,TitaniumPack];
  }
  
}

