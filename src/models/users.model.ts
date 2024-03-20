export class User {
    id: number
    full_name: string
    gender: string
    age: number
    mobile_number: string
    date_of_birth: string

    constructor(
        id: number,
        full_name: string,
        gender: string,
        age: number,
        mobile_number: string,
        date_of_birth: string,
    ) {
        this.id = id
        this.full_name = full_name
        this.gender = gender
        this.age = age
        this.mobile_number = mobile_number
        this.date_of_birth = date_of_birth
    }
}