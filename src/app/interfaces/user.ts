export interface User {
  id?: number;
  fullName: string;
  email: string;
  userName: string;
  password: string;
  passwordConfirm: string;
  title?: string[];
  text?: string[];
}

export interface UserLogin {
  userName: string;
  password: string;
}
