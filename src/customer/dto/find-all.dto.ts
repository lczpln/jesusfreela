import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class FindAllDto {
  @ApiProperty({ required: false, default: 0 })
  @Transform((skip) => parseInt(skip.value), { toClassOnly: true })
  @IsOptional()
  skip?: number;

  @ApiProperty({ required: false, default: 10 })
  @Transform((limit) => parseInt(limit.value), { toClassOnly: true })
  @IsOptional()
  limit?: number;
}
