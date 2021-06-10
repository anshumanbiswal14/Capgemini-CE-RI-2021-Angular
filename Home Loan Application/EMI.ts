export class EMI{

    emiId : number;
    dueDate : Date;
    emiAmount : number;
    interestAmount : number;

    constructor(emiId:number,
        dueDate:Date,
        emiAmount:number,
        interestAmount: number,){
            this.emiId=emiId;
            this.dueDate=dueDate;
            this.emiAmount=emiAmount;
            this.interestAmount=interestAmount;
            
        }
    
}