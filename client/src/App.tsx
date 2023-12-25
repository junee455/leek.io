import React, { useEffect, useState } from 'react'
import { StartPage, Header, EditIngredient, ThemeEditor } from 'components'
import { RouterProvider } from 'react-router-dom'

import { router } from 'router'

export function App() {
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  )
}
