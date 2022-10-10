import { InputTag, LabelTag, CaptionTag } from './style';
import InputProps from './types';

const Input = (props: InputProps) => {
  const { id, type, placehd, label, context, caption } = props;
  return (
    <>
      <LabelTag htmlFor={id}>{label}</LabelTag>
      <InputTag id={id} type={type} placeholder={placehd} {...context} />
      <CaptionTag>{caption}</CaptionTag>
    </>
  );
};

export default Input;
