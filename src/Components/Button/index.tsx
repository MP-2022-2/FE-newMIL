import { ButtonContainer, ButtonWrapper } from './style';
import DefaultButtonProps from './types';

const Button = (props: DefaultButtonProps) => {
  const { type, url, children, disabled } = props;

  return (
    <>
      {!!url && (
        <ButtonWrapper to={url}>
          <ButtonContainer type={type} disabled={disabled} {...props}>
            {children}
          </ButtonContainer>
        </ButtonWrapper>
      )}
      {!url && (
        <ButtonContainer type={type} disabled={disabled} {...props}>
          {children}
        </ButtonContainer>
      )}
    </>
  );
};

export default Button;
