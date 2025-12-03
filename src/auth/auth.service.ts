import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    private user=[
        {
            id:1,
            name:"Robert",
            phone:'0952'
        }
    ]

    getAllUser(){

        return this.user;
    }
}
