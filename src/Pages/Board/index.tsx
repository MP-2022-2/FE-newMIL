import Header from '@/Components/Header';
import Board from '@/Components/Board';
import Navigation from '@/Components/Board/Navigation';
import GridSection from '@/Components/Section';
import { useRecoilValue } from 'recoil';
import { boardState } from '@/Recoil/theme';
import { BoardWrapper, BoardContainer, NaviContainer } from './style';

export const BoardList = ['자유', '질문', '재학생', '졸업생'];

const BoardPage = () => {
  const select = useRecoilValue<string>(boardState);

  return (
    <BoardWrapper>
      <Header />
      <BoardContainer>
        <NaviContainer>
          <GridSection col6 center>
            {BoardList.map((item) => (
              <Navigation key={item} select={select === item} content={item} />
            ))}
          </GridSection>
        </NaviContainer>
        <Board />
      </BoardContainer>
    </BoardWrapper>
  );
};
export default BoardPage;
