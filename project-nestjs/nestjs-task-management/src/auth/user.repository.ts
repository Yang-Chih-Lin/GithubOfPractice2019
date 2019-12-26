import { Repository, EntityRepository } from 'typeorm';
//import * as bcrypt from 'bcrypt';//bcrypt
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';


@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        // "void" 因為不回傳任何值
        const {username, password} = authCredentialsDto;

        // const exists = this.findOne({ username });
        // if(exists){
        //     //throw some error 是一種方法，可使用: @Unique(['username'])
        // }

        //const salt = await bcrypt.genSalt();//bcrypt

        const user = new User();
        user.username = username;
        user.password = password;
        try{
            await user.save();
        } catch (error) {
            if(error.code === '23505'){ // 重複的使用者姓名
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
        
    }
}