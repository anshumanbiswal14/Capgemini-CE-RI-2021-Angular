class Customer{

    customerName : string;
    mobileNumber : string;
    emailId : string;
    dateofBirth : Date;
    gender : string;
    nationality : string;
    aadharNumber : string;
    panNumber : string;

    constructor(customerName:string,
        mobileNumber:string,
        emailId:string,
        dateofBirth:Date,
        gender:string,
        nationality: string,
        aadharNumber: string,
        panNumber:string){
            this.customerName=customerName;
            this.mobileNumber=mobileNumber;
            this.emailId=emailId;
            this.dateofBirth=dateofBirth;
            this.gender=gender;
            this.nationality=nationality;
            this.aadharNumber=aadharNumber;
            this.panNumber=panNumber;
        }

}