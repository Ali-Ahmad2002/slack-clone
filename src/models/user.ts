export class User {

    public name: string[] = [];
    public id: number = 0;



    public toJson() {
        return {
            name: this.name,
            id: this.id,
        };
    }

}

