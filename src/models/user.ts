export class User {

    // public id: number = 0;
    // public name!: string;
    // // public password?: string;
    // // public status?: string;
    public  uid: string = '';
    public id: string = '';
    public email: string  = '';
    public displayName: string  = '';
    public  text: string = '';
    public photoURL: string  = '';

    public emailVerified: boolean = true;

  
    constructor(obj?: any) {
        this.uid = obj ? obj.uid : '';
        this.id = obj ? obj.id : '';
        this.email = obj ? obj.email : '';
        this.displayName = obj ? obj.displayName : '';
        this.text = obj ? obj.text : '';
        this.photoURL = obj ? obj.photoURL : '';
        this.emailVerified = obj ? obj.emailVerified : true;
    }


    public toJson() {
        return {
            uid: this.uid,
            id: this.id,
            email: this.email,
            displayName: this.displayName,
            text:this.text,
            photoURL: this.photoURL,
            emailVerified: this.emailVerified
          
        };
    }


   

}

