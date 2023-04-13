import { UserService } from '@/providers/user.service';
import { CallModule } from './call.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CallModule],
  providers: [UserService],
})
export class UserModule {}
