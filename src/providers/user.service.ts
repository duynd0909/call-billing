import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { User } from '@/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * This function finds a user by their username and returns a Promise that resolves to the User
   * object.
   * @param {string} username - A string representing the username of the user to be found.
   * @returns A Promise that resolves to a User object.
   */
  public async findUserByName(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }

  /**
   * This function creates a new user with the given username and returns a Promise that resolves to
   * the created user.
   * @param {string} username - The `username` parameter is a string that represents the username of
   * the user being created.
   * @returns A Promise that resolves to a User object.
   */
  public async createUser(username: string): Promise<User> {
    const user = new User();
    user.username = username;
    return this.userRepository.create(user);
  }
}
