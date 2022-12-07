import { InputTag, LabelTag, CaptionTag, TextAreaTag } from './style';
import InputProps from './types';

const Input = (props: InputProps) => {
  const { labelGray = false, textarea = false, id, type, placehd, label, context, caption } = props;
  return (
    <>
      <LabelTag htmlFor={id} labelGray={labelGray}>
        {label}
      </LabelTag>
      {textarea ? (
        <TextAreaTag placeholder={placehd} {...context} {...props} />
      ) : (
        <InputTag id={id} type={type} placeholder={placehd} {...context} />
      )}
      <CaptionTag visible={caption}>{caption}</CaptionTag>
    </>
  );
};

export default Input;
