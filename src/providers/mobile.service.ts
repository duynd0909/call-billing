import { NO_MOBILE_CALL_MESSAGE } from './../common/constants/message.constant';
import { NoBillingForUserException } from '@/common/exceptions/no-billing-for-user.exception';
import { BLOCK_DURATION } from '@/common/constants/mobile.constant';
import { BillingResponse } from '@/models/response/billing.response';
import { CreateCallRequest } from '@/models/request/create-call.request';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Mobile } from '@/entities/mobile.entity';

@Injectable()
export class MobileService {
  constructor(
    @InjectRepository(Mobile)
    private mobileRepository: Repository<Mobile>,
  ) {}

  /**
   * This function saves a mobile call with a given username and duration to a repository.
   * @param {string} username - A string representing the username of the user who made the call.
   * @param {number} duration - The duration parameter is a number that represents the length of a call
   * in seconds.
   * @returns A Promise that resolves to a Mobile object after it has been saved to the callRepository.
   */
  public async createCall(
    username: string,
    createCallRequest: CreateCallRequest,
  ): Promise<Mobile> {
    try {
      const mobileCall = new Mobile();
      mobileCall.username = username;
      mobileCall.duration = createCallRequest.call_duration;
      mobileCall.createdAt = new Date();
      return this.mobileRepository.save(mobileCall);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  /**
   * This function retrieves billing information for a given user based on their mobile call history.
   * @param {string} username - a string representing the username of the user for whom the billing
   * information is being retrieved.
   * @returns This function returns a Promise that resolves to a BillingResponse object.
   */
  public async getBilling(username: string): Promise<BillingResponse> {
    const billingResponse = new BillingResponse();
    const mobileCallList: Mobile[] = await this.mobileRepository.findBy({
      username,
    });
    if (!mobileCallList.length) {
      throw new NoBillingForUserException(
        `${NO_MOBILE_CALL_MESSAGE} ${username}`,
      );
    }
    billingResponse.callCount = mobileCallList.length;
    billingResponse.blockCount = mobileCallList.reduce(
      (total, call) => total + Math.ceil(call.duration / BLOCK_DURATION),
      0,
    );
    return billingResponse;
  }
}
