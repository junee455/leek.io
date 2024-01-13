import React, { useEffect } from 'react'
import { StartPage, Login, NotFound } from 'components'
import {
  Navigate,
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
      <Route path="/" element={<Navigate to="main" />} />
      <Route path="main" element={<StartPage />} />
      <Route path="login" element={<Login />} />
      <Route path="any" element={<AnyElement />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
