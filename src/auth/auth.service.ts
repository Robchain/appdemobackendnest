import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    private users=[
        {
            id:1,
            name:"Robert",
            phone:'0952'
        }
    ]

    getAllUser(){

        return this.users;
    }

    createUser(user:any){

        this.users.push({
            ...user,
            id:this.users.length + 1
        })

    }
}
