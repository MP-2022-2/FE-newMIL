import { Dispatch, SetStateAction } from 'react';

export interface DataProps {
  isMajorList: {
    subject: string;
    gpa: number;
  }[];
  isNonMajorList: {
    subject: string;
    gpa: number;
  }[];
}

export interface SubjectProps {
  subject: string;
  gpa: number;
}

export interface ListProps extends DataProps {
  filter: string;
  is?: 'default' | 'chip';
  sm?: boolean;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
