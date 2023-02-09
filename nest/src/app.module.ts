import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { TransactionsModule } from './transactions/transactions.module';

//decorator - Javascript - Ecmascript 7

@Module({
  // imports: [AuthModule, HttpModule, TransactionsModule],
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
