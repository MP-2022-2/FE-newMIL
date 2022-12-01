export interface SubjectType {
  subject: string;
  gpa: number;
}

export interface SubjectOriginalType extends SubjectType {
  visible: boolean;
}
