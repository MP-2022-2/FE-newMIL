import { ButtonContainer, ButtonWrapper } from './style';
import DefaultButtonProps from './types';

const Button = (props: DefaultButtonProps) => {
  // eslint-disable-next-line no-unused-vars
  const { type, url, children } = props;

  return (
    <>
      {!!url && (
        <ButtonWrapper to={url}>
          <ButtonContainer type={type} {...props}>
            {children}
          </ButtonContainer>
        </ButtonWrapper>
      )}

      {!url && (
        <ButtonContainer type={type} {...props}>
          {children}
        </ButtonContainer>
      )}
    </>
  );
};

export default Button;
