export class Contact {
    name: String;
    birthday: Date;
    email: String;
    phoneNumber: String

    constructor(){
        this.name = "",
        this.birthday = new Date(),
        this.email = "",
        this.phoneNumber = ""
    }
}
