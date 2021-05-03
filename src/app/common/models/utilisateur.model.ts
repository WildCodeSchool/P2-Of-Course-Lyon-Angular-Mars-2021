export class Utilisateur {
    public username: string;
    public password: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public age: number;
    public avatarUrl: string;
    public phone: number;

    constructor(username:string, password:string, email:string, firstName: string, lastName: string, age: number, avatarUrl: string, phone: number){
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.avatarUrl = avatarUrl;
        this.phone = phone;
    }
}