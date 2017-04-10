export class User {

    constructor (

        public email: string,
        public password: string,
        public name?: string,
        public username?: string

    ) {}

    getDetails() {
        return {
            name: this.email,
            username: this.email,
            email: this.email,
            password: this.password
        }
    }

}


