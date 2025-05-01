import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateSellerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  cell: string;
}