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