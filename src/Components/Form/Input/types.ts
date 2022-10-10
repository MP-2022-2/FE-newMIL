import { UseFormRegisterReturn } from 'react-hook-form';

export default interface InputProps {
  id: string;
  type: string;
  placehd: string;
  isError?: boolean | undefined;
  autoFocus?: boolean | undefined;
  required?: boolean | undefined;
  min?: string | number;
  label?: string;
  value?: string | number;
  caption?: boolean | string;
  context?: UseFormRegisterReturn;

  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
}
