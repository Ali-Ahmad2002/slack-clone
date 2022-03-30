export class Chats {

    public chats: any[] = [
        {
            id: 0,
            name:  'Ang'
        }
    ];
    public chats_name: any[] = [];
    public chats_id: any = []





    public toJson() {
        return {
            chats: this.chats,
            chats_name: this.chats_name,
            chats_id: this.chats_id,
        };
    }

}