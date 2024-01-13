import React, { useEffect, useState } from 'react'

import { FetchConfig, useFetch } from 'utils/hooks'

import { useRecipesApi } from 'utils/api'

import { Recipe } from 'utils/types'

export function Recipes() {
  // const [fetchRecipes, recipes] = useFetch<void, Recipe[]>()

  const [fetchRecipes, recipes] = useRecipesApi.getAll()

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <div>
      <div>Recipes</div>
      {!recipes.body && <div>Loading...</div>}
      {!!recipes.body && (
        <div>
          {recipes.body.map((r) => (
            <div key={r.id}>
              <div>Name: {r.name}</div>
              <div>Description: {r.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
