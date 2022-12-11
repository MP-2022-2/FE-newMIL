import { InputTag, LabelTag, CaptionTag, TextAreaTag } from './style';
import InputProps from './types';

/**
 * @param textarea boolean Textarea 형태의 Input 입니다
 * @param labelGray boolean label 색상 = 회색
 * @param context useFormRegister useForm을 사용할 때 이곳에 사용합니다.
 */
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
