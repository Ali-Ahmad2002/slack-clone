export class User {

    public id: number = 0;
    public name!: string;
    // public password?: string;
    // public status?: string;




    public toJson() {
        return {
            name: this.name,
            id: this.id,
        };
    }

}

