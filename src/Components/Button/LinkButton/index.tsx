import { Link } from 'react-router-dom';
import { ButtonContainer } from './style';
import ButtonProps from './types';

const LinkButton = ({ url, children, ...props }: ButtonProps) => (
  <ButtonContainer {...props}>
    <Link to={url}>{children}</Link>
  </ButtonContainer>
);

export default LinkButton;
