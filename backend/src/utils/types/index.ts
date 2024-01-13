
export interface RegisterRequestData {
  email: string
  name: string
  password: string
  repeatPassword: string
}

export interface LoginRequestData {
  email: string,
  password: string
}