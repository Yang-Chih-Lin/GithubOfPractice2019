import { Repository, EntityRepository } from 'typeorm';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';//bcrypt
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        // "void" 因為不回傳任何值
        const {username, password} = authCredentialsDto;

        // const exists = this.findOne({ username });
        // if(exists){
        //     //throw some error 是一種方法，可使用: @Unique(['username'])
        // }

        const user = new User();
        user.salt = await bcrypt.genSalt();
        user.username = username;
        user.password = await this.hashPassword(password, user.salt);

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

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string>{
        const {username, password} = authCredentialsDto;
        const user = await this.findOne({ username })

        if (user && await user.validatePassword(password)){
            return user.username;
        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string>{
        return bcrypt.hash(password, salt);
    }
}