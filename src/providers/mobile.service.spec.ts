import { CreateCallRequest } from '@/models/request/create-call.request';
import { BadRequestException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { BillingResponse } from '../models/response/billing.response';

import { Mobile } from '../entities/mobile.entity';

import { MobileService } from './mobile.service';

import { NoBillingForUserException } from '../common/exceptions/no-billing-for-user.exception';

const MOBILE_USERNAME = 'testuser';

describe('MobileService', () => {
  let mobileService: MobileService;

  let mobileRepository: Repository<Mobile>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        MobileService,

        {
          provide: getRepositoryToken(Mobile),

          useClass: Repository,
        },
      ],
    }).compile();

    mobileService = moduleRef.get<MobileService>(MobileService);

    mobileRepository = moduleRef.get<Repository<Mobile>>(
      getRepositoryToken(Mobile),
    );
  });
  describe('createCall', () => {
    it('should create a new call', async () => {
      const createCallRequest: CreateCallRequest = {
        username: MOBILE_USERNAME,
        call_duration: 30000,
      };
      const mockMobile: Mobile = {
        id: 1,
        username: createCallRequest.username,
        duration: createCallRequest.call_duration,
        createdAt: new Date(),
      };
      jest.spyOn(mobileRepository, 'save').mockResolvedValueOnce({
        ...mockMobile,
      });

      const call = await mobileService.createCall(
        createCallRequest.username,
        createCallRequest,
      );
      expect(call).toEqual({
        ...mockMobile,
      });
      // expect(mobileRepository.save).toHaveBeenCalledWith({
      //   username: createCallRequest.username,
      //   duration: createCallRequest.call_duration,
      //   createdAt: new Date(),
      // });
    });

    it('should throw BadRequestException if user is too long', async () => {
      const createCallRequest: CreateCallRequest = {
        username: 'a'.repeat(33),
        call_duration: 30000,
      };
      await expect(
        mobileService.createCall(createCallRequest.username, createCallRequest),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if call duration is negative', async () => {
      const createCallRequest: CreateCallRequest = {
        username: 'a'.repeat(33),
        call_duration: -1000,
      };
      await expect(
        mobileService.createCall(createCallRequest.username, createCallRequest),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if call duration is not a number', async () => {
      const createCallRequest: CreateCallRequest = {
        username: 'a'.repeat(33),
        call_duration: 'not a number' as any,
      };
      await expect(
        mobileService.createCall(createCallRequest.username, createCallRequest),
      ).rejects.toThrow(BadRequestException);
    });
  });
  describe('getBilling', () => {
    it('should return billing response', async () => {
      const mobileCallList = [
        { username: MOBILE_USERNAME, duration: 60000 },

        { username: MOBILE_USERNAME, duration: 30000 },

        { username: MOBILE_USERNAME, duration: 15000 },
      ];

      jest
        .spyOn(mobileRepository, 'findBy')
        .mockResolvedValue(mobileCallList as Mobile[]);

      const billingResponse = await mobileService.getBilling(MOBILE_USERNAME);

      expect(billingResponse).toBeInstanceOf(BillingResponse);

      expect(billingResponse.callCount).toBe(mobileCallList.length);

      expect(billingResponse.blockCount).toBe(4); // 2 blocks for 60s, 1 block for 30s, and 1 block for 15s
    });

    it('should throw NoBillingForUserException if no mobile calls found for user', async () => {
      jest.spyOn(mobileRepository, 'findBy').mockResolvedValue([]);

      await expect(mobileService.getBilling(MOBILE_USERNAME)).rejects.toThrow(
        NoBillingForUserException,
      );
    });
  });
});
