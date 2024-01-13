import React from 'react'

import { FormBuilder, useFormBuilder } from 'components/utils'

import './EditIngredient.scss'

const ingredientFormDataKeys = [
  'name',
  'description',
  'pictures',
  'tags',
] as const

type IngredientFormData = {
  [key in typeof ingredientFormDataKeys[number]]: string
}

export function EditIngredient() {
  const formBuilder = useFormBuilder(ingredientFormDataKeys);

  return (
    <div className="EditIngredient">
      <button>Save</button>
    </div>
  )
}
