export interface UserType {
  isAdmin?: boolean;
  userIdx: number;
  name: string;
  password: string;
  nickname: string;
  studentId: number;
  email: string;
  profilePhoto?: string;
}
