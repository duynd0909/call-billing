import { MobileModule } from './modules/mobile.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DatabaseConfig } from '@/common/config/database.config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseConfig,
    MobileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
