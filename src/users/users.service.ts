import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(@Body() user: CreateUserDto) {
    user.hashPassword();

    try {
      const createdUser = new this.userModel(user);

      await createdUser.save();

      return;
    } catch (error) {
      throw new BadRequestException('Nome de usuário ou email já cadastrado.');
    }
  }

  async findOne(username: string) {
    return await this.userModel
      .findOne({
        $or: [{ username }, { email: username }],
      })
      .select('password');
  }

  async getUserProfile(user: Partial<User>) {
    return await this.userModel.findOne({
      username: user.username,
    });
  }
}
