export interface DataProps {
  data: {
    subject: string;
    kind: string;
    gpa: number;
    idx?: number;
    visible: boolean;
  }[];
}

export interface ListProps extends DataProps {
  filter: string;
  is?: 'default' | 'chip';
}
