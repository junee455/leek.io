import { GenericApi } from './genericApi'

export interface RegisterRequestData {
  email: string
  name: string
  password: string
  repeatPassword: string
}

class UserApi extends GenericApi {
  constructor() {
    super('user')
  }

  login() {
    return this.constructRequest<any, any>('/login', 'POST')
  }

  register() {
    return this.constructRequest<any, RegisterRequestData>('/register', 'POST')
  }
}

export const useUserApi = new UserApi()
