export class Message {
    public author: string = '';
    public text: string = '';
    public chatId: string  = '';
    public timeStamp: number  = 0; 
    public id: string  = ''; //User ID From FIRESTORE COLLECTION USERS


    constructor(obj?: any) {
        this.author = obj ? obj.name : '';
        this.text = obj ? obj.id : '';
        this.chatId = obj ? obj.imgUrl : '';
        this.timeStamp = obj ? obj.timeStamp : 0;
        this.id = obj ? obj.creator : '';
    }


    public toJson() {
        return {
            name: this.author,
            text: this.text,
            timeStamp: this.timeStamp,
            chatId: this.chatId
        };
    }

}