export class Chat {

    public name!: string;
    public id!: string;
    public message!: string;
    public imgUrl!: string;
    public timeStamp!: number;
    public creator!: string; //User ID From FIRESTORE COLLECTION USERS


    constructor(obj: any) {
        this.name = obj.name;
        this.id = obj.id;
        this.message = obj.message;
        this.imgUrl = obj.imgUrl;
        this.timeStamp = obj.timeStamp;
        this.creator = obj.creator;
    }


    public toJson() {
        return {
            name: this.name,
            id: this.id,
            message: this.message,
            imgUrl: this.imgUrl,
            timeStamp: this.timeStamp,
            creator: this.creator
        };
    }

}