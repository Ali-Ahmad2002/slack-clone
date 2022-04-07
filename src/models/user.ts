export class User {

    // public id: number = 0;
    // public name!: string;
    // // public password?: string;
    // // public status?: string;
    public  uid: string = '';
    public email: string  = '';
    public displayName: string  = '';
    public photoURL: string  = '';
    public emailVerified: boolean = true;

  
    constructor(obj?: any) {
        this.uid = obj ? obj.uid : '';
        this.email = obj ? obj.email : '';
        this.displayName = obj ? obj.displayName : '';
        this.photoURL = obj ? obj.photoURL : '';
        this.emailVerified = obj ? obj.emailVerified : true;
    }


    public toJson() {
        return {
            uid: this.uid,
            email: this.email,
            displayName: this.displayName,
            photoURL: this.photoURL,
            emailVerified: this.emailVerified
          
        };
    }


   

}

