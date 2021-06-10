import {EMI} from './EMI';
class LoanAgreement{

    loanAgreementId : number;
    loanApplicationId : number;
    emi : number;

    constructor(loanAgreementId:number,
        loanApplicationId:number,
        emi:number){
            this.loanAgreementId=loanAgreementId;
            this.loanApplicationId=loanAgreementId;
            this.emi=emi;
            
        }

  

}