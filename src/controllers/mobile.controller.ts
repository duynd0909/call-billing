import { BillingResponse } from '@/models/response/billing.response';
import { MobileService } from '@/providers/mobile.service';
import {
  Body,
  Controller,
  Param,
  Put,
  Get,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCallRequest } from '@/models/request/create-call.request';

@Controller('mobile')
export class MobileController {
  constructor(private mobileService: MobileService) {}

  @Put(':username/call')
  createCall(
    @Body() createCallRequest: CreateCallRequest,
    @Param('username', ValidationPipe) username: string,
  ): Promise<{ id: number }> {
    return this.mobileService.createCall(username, createCallRequest);
  }

  @Get(':username/billing')
  getBilling(
    @Param('username', ValidationPipe) username: string,
  ): Promise<BillingResponse> {
    return this.mobileService.getBilling(username);
  }
}
