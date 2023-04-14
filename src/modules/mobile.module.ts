import { Mobile } from '@/entities/mobile.entity';
import { MobileController } from '@/controllers/mobile.controller';
import { MobileService } from '@/providers/mobile.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mobile])],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
