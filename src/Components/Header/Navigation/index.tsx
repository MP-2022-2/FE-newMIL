import { Link } from 'react-router-dom';
import { NaviContainer } from './style';
import HeaderButtonProps from './types';

const HeaderNavigation = ({ url, children, ...props }: HeaderButtonProps) => (
  <NaviContainer {...props}>
    <Link to={url}>
      <h4>{children}</h4>
    </Link>
  </NaviContainer>
);

export default HeaderNavigation;
