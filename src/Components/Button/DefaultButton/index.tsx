import { ButtonContainer } from './style';
import DefaultButtonProps from './types';

const DefaultButton = ({ url = '', children, ...props }: DefaultButtonProps) => (
  <ButtonContainer to={url} {...props}>
    <button type="button">{children}</button>
  </ButtonContainer>
);

export default DefaultButton;
