export class Chat {

    public name: string = '';
    public id: string = '';
    public imgUrl: string  = '';
    public timeStamp: number  = 0; 
    public creator: string  = ''; //User ID From FIRESTORE COLLECTION USERS


    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.id = obj ? obj.id : '';
        this.imgUrl = obj ? obj.imgUrl : '';
        this.timeStamp = obj ? obj.timeStamp : 0;
        this.creator = obj ? obj.creator : '';
    }


    public toJson() {
        return {
            name: this.name,
            id: this.id,
            imgUrl: this.imgUrl,
            timeStamp: this.timeStamp,
            creator: this.creator
        };
    }

}