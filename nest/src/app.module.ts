import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
// import { TransactionsModule } from './transactions/transactions.module';

//decorator - Javascript - Ecmascript 7

@Module({
  // imports: [AuthModule, HttpModule, TransactionsModule],
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
