import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Importa PrismaModule
  controllers: [OrderController], // Declara el controlador
  providers: [OrderService], // Declara el servicio
})
export class OrderModule {}