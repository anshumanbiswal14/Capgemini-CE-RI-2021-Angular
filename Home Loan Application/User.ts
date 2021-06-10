class User{

    userId : number;
    password : string;
    role : string;
    
    constructor(userId: number,password:string,role:string){

        this.userId=userId;
        this.password=password;
        this.role=role;
    }
}