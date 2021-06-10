
class loanApplication{

    applicationId : number;
    applicationDate : Date;
    customer : number;
    loanAppliedAmount : number;
    loanApprovedAmount : number;
    landVerificationApproval : boolean;
    financeVerificationApproval : boolean;
    adminApproval : boolean;
    status : string;

    constructor(applicationId:number,
        applicationDate:Date,
        customer:number,
        loanAppliedAmount:number,
        loanApprovedAmount:number,
        landVerificationApproval:boolean,
        financeVerificationApproval:boolean,
        adminApproval:boolean,
        status:string){
            this.applicationId=applicationId;
            this.applicationDate=applicationDate;
            this.customer=customer;
            this.loanAppliedAmount=loanAppliedAmount;
            this.loanApprovedAmount=loanApprovedAmount;
            this.landVerificationApproval=landVerificationApproval;
            this.financeVerificationApproval=financeVerificationApproval;
            this.adminApproval=adminApproval;
            this.status=status;



        }
}