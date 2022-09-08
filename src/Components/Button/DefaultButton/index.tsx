import { Link } from 'react-router-dom';
import { ButtonContainer } from './style';
import DefaultButtonProps from './types';

const DefaultButton = ({ url = '', children, ...props }: DefaultButtonProps) => (
  <ButtonContainer {...props}>
    <Link to={url}>{children}</Link>
  </ButtonContainer>
);

export default DefaultButton;
