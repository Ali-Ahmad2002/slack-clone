export class Message {
    public $key!:string;
    public email!:string;
    public username!:string;
    public message!: string; //USER ID FROM FIRESTORE COLLECTION USERS
    public timeSend: Date = new Date(); //CHAT ID FROM  FIRESTORE COLLECTION CHATS
}