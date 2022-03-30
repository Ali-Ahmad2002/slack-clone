export class Message {
    public text!: string;
    public author!: string; //USER ID FROM FIRESTORE COLLECTION USERS
    public chatId!: string; //CHAT ID FROM  FIRESTORE COLLECTION CHATS
}