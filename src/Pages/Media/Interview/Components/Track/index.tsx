import { trackState } from '@/Utils/Store/Recoil/theme';
import { useSetRecoilState } from 'recoil';
import { NavigationProps } from './types';
import { NaviContainer, IconContainer } from './style';

export const Navigation = (props: NavigationProps) => {
  const { content, isSelectedTrack, select } = props;
  const setContent = useSetRecoilState<string>(trackState);
  return (
    <NaviContainer title={select ? 'selected' : ''} onClick={() => setContent(isSelectedTrack)}>
      <IconContainer src={props.icon} />
      {content}
    </NaviContainer>
  );
};

export default Navigation;
