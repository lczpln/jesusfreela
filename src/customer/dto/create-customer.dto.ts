import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  joint: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pointNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  identification: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  segment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  propertyType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  uf: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  demand: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  responsible: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  service: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lpu: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  history: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  oldStatus: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  oldHistory: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  estimatedMeasurementProtocolDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  measurementProtocolDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  protocol: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  estimatedMeasurementDoneDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  measurementDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documentReleasedNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dueDate: string;
}
