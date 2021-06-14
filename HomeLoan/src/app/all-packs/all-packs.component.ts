import { Component, OnInit } from '@angular/core';
import { LoanDetails } from '../loan-details';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-all-packs',
  templateUrl: './all-packs.component.html',
  styleUrls: ['./all-packs.component.css']
})
export class AllPacksComponent implements OnInit {

  __LoanService:LoanService;

  constructor(ls:LoanService) { 
    this.__LoanService=ls;
  }
  
  ngOnInit(): void {
  }
  getAllDetails():LoanDetails[]
  {
    return this.__LoanService.getAllDetails();
  }

}