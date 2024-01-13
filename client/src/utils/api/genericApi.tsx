import {
  FetchConfig,
  FetchResponse,
  SupportedFetchMethods,
  useFetch,
} from '../hooks'

export class GenericApi {
  constructor(private baseUrl: string) {}

  public constructRequest<ResponseType = void, DataType = void>(
    url: string,
    method: SupportedFetchMethods
  ): [(data: DataType) => void, FetchResponse<ResponseType>, any] {
    const [fetchFn, response, error] = useFetch<DataType, ResponseType>()

    const config: FetchConfig<any> = {
      method,
    }

    const newFetchFn = (data: DataType) =>
      fetchFn(`api/${this.baseUrl}${url}`, { ...config, data })

    return [newFetchFn, response, error]
  }
}
