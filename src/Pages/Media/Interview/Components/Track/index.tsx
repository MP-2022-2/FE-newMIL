import { trackState } from '@/Recoil/theme';
import { useSetRecoilState } from 'recoil';
import { NavigationProps } from './types';
import { NaviContainer, IconContainer } from './style';

export const Navigation = (props: NavigationProps) => {
  const { content, select } = props;
  const setContent = useSetRecoilState<string>(trackState);
  console.log(props.icon);
  return (
    <NaviContainer title={select ? 'selected' : ''} onClick={() => setContent(content)}>
      <IconContainer src={props.icon} />
      {content}
    </NaviContainer>
  );
};

export default Navigation;
