export class Message {
    public author: string = '';
    public text: string = '';
    public chatId: string  = '';
    public timeStamp: number  = 0; 
    public id: string  = ''; //User ID From FIRESTORE COLLECTION USERS
    public userImg:string = '';


    constructor(obj?: any) {
        this.author = obj ? obj.author : '';
        this.text = obj ? obj.text : '';
        this.chatId = obj ? obj.chatId : '';
        this.timeStamp = obj ? obj.timeStamp : 0;
        this.id = obj ? obj.id : '';
        this.userImg = obj ? obj.userImg : '';
    }


    public toJson() {
        return {
            author: this.author,
            text: this.text,
            chatId: this.chatId,
            timeStamp: this.timeStamp,
            id: this.id,
            userImg: this.userImg
            
        };
    }

}