import { ButtonContainer } from './style';
import DefaultButtonProps from './types';

const DefaultButton = ({ type, url = '', children, ...props }: DefaultButtonProps) => (
  <ButtonContainer to={url} {...props}>
    <button type={type}>{children}</button>
  </ButtonContainer>
);

export default DefaultButton;
