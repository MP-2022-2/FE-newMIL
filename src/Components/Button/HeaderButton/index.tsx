import { Link } from 'react-router-dom';
import { ButtonContainer } from './style';
import HeaderButtonProps from './types';

const HeaderButton = ({ url, children, ...props }: HeaderButtonProps) => (
  <ButtonContainer {...props}>
    <Link to={url}>
      <h4>{children}</h4>
    </Link>
  </ButtonContainer>
);

export default HeaderButton;
