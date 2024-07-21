import { BadRequestException, Injectable } from '@nestjs/common';
import { UserInterface } from './userInterface';

@Injectable()
export class AuthService {
    private characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
    private emailUser: string = 'correoejemplo@gmail.com';
    private password: string = 'pasarelaprueba1234';


    login( emailUser: string, password: string ) {
        const isExistUser: boolean = this.validateUser({emailUser, password});

        if (isExistUser) {
            return this.generateStringAsJwt();
        }else{
            throw new BadRequestException('Contraseña o correo son incorrectos')
        }
    }

    private validateUser( {emailUser, password}: UserInterface ): boolean{
        return emailUser === this.emailUser && password === this.password;
    }

    private generateStringAsJwt(): string {
        const generateJwtOf60charts: number = 60;
        let result: string = "";
        
        for(let i = 0; i < generateJwtOf60charts; i++){
            result +=  this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        }
        return result;
    }
}