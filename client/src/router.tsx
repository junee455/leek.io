import React, { useEffect } from 'react'
import { StartPage, Login } from 'components'
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  useSearchParams,
} from 'react-router-dom'

function AnyElement() {
  const [params] = useSearchParams()

  return (
    <div>
      <div>Any element</div>
      <div>params: {params.get('one')}</div>
    </div>
  )
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="start" element={<StartPage />} />
      <Route path="any" element={<AnyElement />} />
      <Route path="*" element={<StartPage />} />
    </Route>
  )
)
