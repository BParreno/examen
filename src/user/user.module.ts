import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Importa PrismaModule
  controllers: [UserController], // Declara el controlador
  providers: [UserService], // Declara el servicio
})
export class UserModule {}