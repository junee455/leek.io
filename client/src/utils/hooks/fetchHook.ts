import React, { useState } from 'react'

export type SupportedFetchMethods = 'POST' | 'GET'

export interface FetchConfig<T> {
  method?: SupportedFetchMethods
  data?: T
}

export type RequestProgress = number | 'inProgress' | 'idle' | 'done' | 'error'

export interface FetchResponse<T> {
  progress: RequestProgress
  status?: number
  body?: T
}

export function useFetch<
  DataType = void,
  ResponseType = void,
  ErrorType = void,
>(): [
  (url: string, config?: FetchConfig<DataType>) => void,
  FetchResponse<ResponseType>,
  ErrorType | undefined,
] {
  const [error, setError] = useState<ErrorType>()
  const [response, setResponse] = useState<FetchResponse<ResponseType>>({
    progress: 'idle',
  })

  const fetchFn = (url: string, config: FetchConfig<DataType> = {}) => {
    const reqBody =
      config.method === 'POST' ? JSON.stringify(config.data || {}) : null

    const headersInit = new Headers()
    headersInit.append('Content-Type', 'application/json')

    const requestInit: RequestInit = {
      body: reqBody,
      method: config.method,
      headers: headersInit,
    }

    fetch(url, requestInit)
      .then((res) => {
        setResponse((p) => ({ ...p, status: res.status }))
        return res.json()
      })
      .then((json: ResponseType) => {
        setResponse((p) => ({
          ...p,
          progress: 'done',
          body: json,
        }))
      })
      .catch(setError)
  }

  return [fetchFn, response, error]
}
