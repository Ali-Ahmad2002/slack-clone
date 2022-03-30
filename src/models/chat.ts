export class Chats {

    public chats: any[] = [];
    public chats_name: any[] = [];
    public chats_id: any []= [
        {
            id: 0,
            chaa: 'Test'
            
        }
    ]





    public toJson() {
        return {
            chats: this.chats,
            chats_name: this.chats_name,
            chats_id: this.chats_id,
        };
    }

}