import { CallService } from '@/providers/call.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CallService],
  exports: [CallService],
})
export class CallModule {}
