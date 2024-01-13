import { Injectable } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class RecipesService implements OnModuleInit {
  async onModuleInit() {}
}
