import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsJWT()
  accessToken: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsJWT()
  refreshToken: string;
}
