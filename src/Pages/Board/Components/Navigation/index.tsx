import { NavigationProps } from './types';
import { NaviContainer } from './style';

export const Navigation = (props: NavigationProps) => {
  const { content, selected } = props;

  return <NaviContainer title={selected ? 'selected' : ''}>{content}</NaviContainer>;
};

export default Navigation;
