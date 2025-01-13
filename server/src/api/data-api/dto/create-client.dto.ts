import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CteateClientDto extends Document {
  @ApiProperty()
  @IsNumber()
  firstName: string;

  @ApiProperty()
  @IsNumber()
  lastName: string;

  @ApiProperty()
  @IsNumber()
  gender: string;

  @ApiProperty()
  @IsNumber()
  address: string;

  @ApiProperty()
  @IsNumber()
  city: string;

  @ApiProperty()
  @IsNumber()
  phone: string;

  @ApiProperty()
  @IsNumber()
  email: string;

  @ApiProperty()
  @IsNumber()
  status: string;
}
