import { Injectable } from '@nestjs/common';

export interface Recipe {
  id: string | number;
  name: string;
  description: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHi(): string {
    return 'hi mafaka';
  }

  getRecipes(): Recipe[] {
    const recipes: Recipe[] = [
      {
        id: 1,
        name: 'борщ',
        description: 'дефолтный борщец',
      },
      {
        id: 2,
        name: 'щи',
        description: 'с капусткой, но не красный',
      },
    ];

    return recipes;
  }
}
