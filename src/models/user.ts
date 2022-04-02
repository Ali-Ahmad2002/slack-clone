export class User {

    public id: number = 0;
    public name!: string;
    // public password?: string;
    // public status?: string;




    public toJson() {
        return {
            id: this.id,
            name: this.name,
          
        };
    }

}

