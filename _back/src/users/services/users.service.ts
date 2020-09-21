import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
    }

    async getUserByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
        if (!user) throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);

        return user;
    }

    async create(userData: CreateUserDto) {
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(newUser);
        return newUser;
    }

    async getUserById(id: number) {
        const user = await this.usersRepository.findOne({ id});
        if (!user)  throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
        return user;
    }
}
