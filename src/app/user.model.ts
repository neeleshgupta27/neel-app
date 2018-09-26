export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    constructor() { }

    toString(){
        return "id:"+this.id+", first_name:"+this.first_name+", last_name:"+this.last_name+", email:"+this.email;
      }
} 