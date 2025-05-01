import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';;
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ClientModule } from './client/client.module';
import { SellerModule } from './seller/seller.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ProductModule,
    OrderModule,
    ClientModule,
    SellerModule,
    UserModule,
    PrismaModule, // Asegúrate de importar PrismaModule aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}