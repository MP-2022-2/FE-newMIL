import { trackState } from '@/Recoil/theme';
import { useSetRecoilState } from 'recoil';
import { NavigationProps } from './types';
import { NaviContainer, IconContainer } from './style';

export const Navigation = (props: NavigationProps) => {
  const { content, id, select } = props;
  const setContent = useSetRecoilState<string>(trackState);
  return (
    <NaviContainer title={select ? 'selected' : ''} onClick={() => setContent(id)}>
      <IconContainer src={props.icon} />
      {content}
    </NaviContainer>
  );
};

export default Navigation;
