export interface UserAuthType {
  email: string;
}

export interface UserType extends UserAuthType {
  name: string;
  studentId: number;
  company: string;
  track: string;
  identity?: string;
}

export interface APILoginType extends UserType {
  msg: string;
  status: number;
  accessToken: string;
  refreshToken: string;
}

export interface UserLoginType {
  userId: string;
  password: string;
  idCheck?: boolean;
}

export interface UserSignUpType extends UserLoginType, UserType {
  pwcheck: string;
  verify: string;
}
