export interface Ingredient {
  id: string,
  name: string,
  description: string
}

export interface Recipe {
  author: string,
  description: string,
  ingredients: Ingredient[],
  steps: string[]
}