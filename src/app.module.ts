import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentController } from './payment/payment.controller';
import { AuthService } from './payment/service/auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, PaymentController],
  providers: [AppService, AuthService],
})
export class AppModule {}
