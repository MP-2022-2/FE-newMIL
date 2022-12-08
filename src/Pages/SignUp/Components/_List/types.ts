export interface DataProps {
  data: {
    subject: string;
    gpa: number;
    idx?: number;
    visible: boolean;
  }[];
}

export interface ListProps extends DataProps {
  filter: string;
  is?: 'default' | 'chip';
  sm?: boolean;
}
