import React from 'react'

import { FormBuilder } from 'components/utils'

import './EditIngredient.scss'

export function EditIngredient() {
  const formData = {
    name: 'Bell pepper',
    description: 'regularr bell pepper',
    picture: 'somePic.png',
    tags: ['1', '2', '3'],
  }

  return (
    <div className="EditIngredient">
      <FormBuilder data={formData} />
      <button>Save</button>
    </div>
  )
}
