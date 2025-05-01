import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Importa PrismaModule
  controllers: [SellerController], // Declara el controlador
  providers: [SellerService], // Declara el servicio
})
export class SellerModule {}