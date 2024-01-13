import { Injectable } from '@nestjs/common';
import { PrismaService } from './prismaService';
import { User, Prisma } from '@prisma/client';

import { LoginRequestData, RegisterRequestData } from 'src/utils/types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(data: LoginRequestData) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    console.log(user);

    if (user?.password === data.password) {
      return user;
    } else {
      return null;
    }
  }

  async users() {}

  async createUser(data: RegisterRequestData) {
    await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });
  }

  async updateUser() {}

  async deleteUser() {}
}
