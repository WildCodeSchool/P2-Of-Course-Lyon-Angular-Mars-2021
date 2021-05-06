export class Utilisateur {
  public username: string;
  public password: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public age: number;
  public avatarUrl: string;
  public phone: string;
  public adress: string;

  constructor(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    age: number,
    avatarUrl: string,
    phone: string,
    adress: string
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.avatarUrl = avatarUrl;
    this.phone = phone;
    this.adress = adress;
  }
}
