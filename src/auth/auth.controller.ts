import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {

    constructor(private authService : AuthService){} //esta es una manera simplificada

    @Get('/auth')
    getAllUser(){
        return this.authService.getAllUser();
    }

}
