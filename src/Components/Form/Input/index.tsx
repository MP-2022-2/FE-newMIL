import { InputTag, LabelTag } from './style';
import InputProps from './types';

const Input = ({ id, type, place, label, ...props }: InputProps) => (
  <>
    <LabelTag htmlFor={id}>{label}</LabelTag>
    <InputTag id={id} type={type} placeholder={place} {...props} />
  </>
);

export default Input;
