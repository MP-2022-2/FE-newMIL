import { NavigationProps } from './types';
import { NaviContainer } from './style';

export const Navigation = (props: NavigationProps) => {
  const { content, selected } = props;

  return (
    <NaviContainer title={selected ? 'selected' : ''}>
      <h3>{content}</h3>
    </NaviContainer>
  );
};

export default Navigation;
