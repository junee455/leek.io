export enum Role {
  User = 'user',
  Admin = 'admin'
}

export interface User {
  name: string,
  nick: string,
  id: string,
  email: string,
  role: Role
}