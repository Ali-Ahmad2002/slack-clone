export class Users {

    public users: string[] = [];
    public users_images: string[] = [];
    public users_id: number = 0;
    public users_chat:any = [];


    public toJson() {
        return {
            users: this.users,
            users_images: this.users_images,
            users_id: this.users_id,
            users_chat: this.users_chat,
           
        };
    }

}

export class User {

    public name: string[] = [];
    public users_id: number = 0;


   a
    public toJson() {
        return {
           
        };
    }

}

export class Message{
    public text!: string;
    public author!: string; //USER ID FROM FIRESTORE COLLECTION USERS
    public chatId!: string; //CHAT ID FROM  FIRESTORE COLLECTION CHATS
}