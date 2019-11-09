export class User {
    constructor(
        public _id: String,
        public name: String,
        public email: String,
        public password: String,
        public admin: boolean = false,
        public memberSince: Date
    ){}
}