export interface LoginResponse {
  user: string;
  token: string;
}
export interface RegisteredUser {
  id: number;
  username: string;
  active: boolean;
}
