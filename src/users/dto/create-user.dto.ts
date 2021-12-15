import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

import * as bcrypt from 'bcrypt';
import { bcryptConstants } from 'src/auth/constants';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  photo: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  occupation: string;

  hashPassword() {
    const salt = bcrypt.genSaltSync(bcryptConstants.saltOrRounds);
    const hash = bcrypt.hashSync(this.password, salt);

    this.password = hash;
  }
}
