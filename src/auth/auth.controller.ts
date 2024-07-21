import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/authRequest.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() user: LoginDto){
        return this.authService.login(user.email, user.password);
    }
}