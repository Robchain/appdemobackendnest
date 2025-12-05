import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request, Response } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller()
export class AuthController {

    constructor(private authService : AuthService){} //esta es una manera simplificada

    @Get('/auth')
    getAllUser(@Req() request : Request, @Res() response: Response){ //usar funciones de express tambien es alternativa

        console.log(request.url);
        return response.status(200).json(this.authService.getAllUser());
    }

    @Post('/user')
    createUserPost(@Body() user:CreateUserDTO){

        this.authService.createUser(user);

    }

}
