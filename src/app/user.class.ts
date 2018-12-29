export class User {
  constructor(public name: string, public email: string) {}
}

export interface IUserResponse {
  total: number;
  results: User[];
}
