import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Importa PrismaModule
  controllers: [ProductController], // Declara el controlador
  providers: [ProductService], // Declara el servicio
})
export class ProductModule {}