

export class Chat {

    public name!: string;
    public id! : string;
    public message!: string;
    public imgUrl! : string;

    public timeStamp!: number;
    public creator! : string; //User ID From FIRESTORE COLLECTION USERS


    constructor(obj : any){
        this.name = obj.name;
    }


    public toJson() {
        return {
           name : this.name
        };
    }

}