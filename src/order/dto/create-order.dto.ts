import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  owner: string;

  @IsNotEmpty()
  product: string;

  @IsNotEmpty()
  quantity_product: string;

  @IsNotEmpty()
  total: string;
}