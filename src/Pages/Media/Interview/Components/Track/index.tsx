import { trackState } from '@/Recoil/theme';
import { useSetRecoilState } from 'recoil';
import { NavigationProps } from './types';
import { NaviContainer } from './style';

export const Navigation = (props: NavigationProps) => {
  const { content, select } = props;
  const setSelect = useSetRecoilState<string>(trackState);

  return (
    <NaviContainer title={select ? 'selected' : ''} onClick={() => setSelect(content)}>
      {content}
    </NaviContainer>
  );
};

export default Navigation;
