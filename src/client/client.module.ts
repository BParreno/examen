import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Importa PrismaModule para tener acceso a PrismaService
  controllers: [ClientController], // Declara el controlador
  providers: [ClientService], // Declara el servicio
})
export class ClientModule {}