export class User {
    constructor(id: String, username: String, password: String, email: String) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
    }
    id: String;
    username: String;
    password: String;
    email: String;
}
