import { SubjectType } from './subject';

export interface UserAuthType {
  email: string;
  randomCode?: string;
  reset?: boolean;
}

export interface UserType {
  email: string;
  name: string;
  studentId: number;
  company: string;
  track: string;
  nickName: string;
  identity?: string;
}

export interface UserLoginType {
  userId: string;
  password: string;
  idCheck?: boolean;
}

export interface UserSignUpType extends UserLoginType, UserType {
  pwcheck?: string;
  verify: string;
}

export interface APILoginType extends UserType {
  msg: string;
  status: number;
  accessToken: string;
  refreshToken: string;
}

export interface SignUpType extends UserLoginType, UserType {}

export interface TrackType {
  studentId: number;
  subjectList: SubjectType[];
}
