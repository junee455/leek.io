import { GenericApi } from './genericApi';
import { Recipe } from 'utils/types'

class RecipesApi extends GenericApi {
  constructor() {
    super('recipes')
  }

  getAll() {
    return this.constructRequest<Recipe[]>('', 'GET')
  }

  createRecipe() {}

  updateRecipe(id: string) {}
}

export const useRecipesApi = new RecipesApi()
