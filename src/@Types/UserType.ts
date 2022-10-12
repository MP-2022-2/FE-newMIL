export interface UserLoginType {
  userId: string;
  password: string;
}

export interface UserType extends UserLoginType {
  email: string;
  name: string;
  student_id: number;
  company: string;
  track: string;
  identity?: string;
}
