export default interface InputProps {
  id: string;
  type: string;
  place: string;
  isError?: boolean | undefined;
  autoFocus?: boolean | undefined;
  required?: boolean | undefined;
  min?: string;
  label?: string;
  value?: string | number;

  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
}
