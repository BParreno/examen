import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {} // Inyecta PrismaService

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto }); // Usa createProductDto en 'data'
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } }); // Usa 'id' en lugar de 'name'
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data: updateProductDto });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}