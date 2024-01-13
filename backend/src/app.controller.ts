import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService, Recipe } from './app.service';
import { UserService } from './services';
import { LoginRequestData } from './utils/types';

export interface RegisterRequestData {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi(): string {
    return this.appService.getHi();
  }

  @Get('/recipes')
  getRecipes(): Recipe[] {
    return this.appService.getRecipes();
  }

  @Post('/recipes')
  postRecipes(@Body() data: any): void {
    console.log('test post', JSON.stringify(data));
  }

  @Post('/recipes/:id')
  updateRecipe(@Param('id') id: string): void {
    console.log('param: ', id);
  }

  @Post('/user/register')
  registerUser(@Body() data: RegisterRequestData): void {
    this.userService.createUser(data);
  }

  @Post('/user/login')
  loginUser(@Body() data: LoginRequestData) {
    console.log(data);
    return this.userService.user(data);
  }
}
