import { SubMenuListContainer } from './style';
import { SubMenuListProps } from './types';

export default function SubMenuList(props: SubMenuListProps) {
  const { title } = props;

  return (
    <SubMenuListContainer>
      <h2>{title}</h2>
    </SubMenuListContainer>
  );
}
