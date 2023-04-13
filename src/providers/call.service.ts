import { UserService } from '@/providers/user.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Call } from '@/entities/call.entity';

@Injectable()
export class CallService {
  constructor(
    @InjectRepository(Call)
    private callRepository: Repository<Call>,
    private userService: UserService,
  ) {}

/**
 * This function saves a call by finding or creating a user and creating a new call object with the
 * user's ID and duration, then saving it to the call repository.
 * @param {string} username - a string representing the name of the user making the call.
 * @param {number} duration - The duration parameter is a number that represents the length of a call
 * in seconds.
 * @returns The `saveCall` function returns a Promise that resolves to a `Call` object.
 */
  public async saveCall(username: string, duration: number): Promise<Call> {
    let user = await this.userService.findUserByName(username);
    if(!user){
      user = await this.userService.createUser(username)
    }
    const call = new Call();
    call.userid = user.id;
    call.duration = duration;
    return this.callRepository.save(call);
  }
}
