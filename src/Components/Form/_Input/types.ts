import { UseFormRegisterReturn } from 'react-hook-form';

export default interface InputProps {
  id: string;
  type: string;
  placehd?: string;
  autoFocus?: boolean | undefined;
  required?: boolean | undefined;
  label?: string;
  value?: string | number;
  caption?: boolean | string;
  context?: UseFormRegisterReturn;

  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
}
