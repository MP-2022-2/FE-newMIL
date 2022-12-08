import GridSection from '@/Components/Section';
import { BoardListProps } from './types';
import { BoardListContainer } from './style';

export default function BoardList(props: BoardListProps) {
  return (
    <GridSection col6>
      <BoardListContainer>안녕하세요</BoardListContainer>
    </GridSection>
  );
}
