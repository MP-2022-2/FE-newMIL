import Header from '@/Components/Header';
import Navigation from '@/Pages/Board/Components/Navigation';
import GridSection from '@/Components/Section';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BoardCard from './Components/BoardCard';
import { BoardWrapper, BoardContainer, NaviContainer } from './style';

export const BoardList = ['자유', '질문', '재학생', '졸업생'];

const BoardPage = () => {
  const [selected, setSelected] = useState<string>('자유');

  return (
    <BoardWrapper>
      <Header />
      <BoardContainer>
        <NaviContainer>
          <GridSection col6 center>
            {BoardList.map((item) => (
              <Link key={item} to={`/board/${item}`} onClick={() => setSelected(item)}>
                <Navigation selected={selected === item} content={item} />
              </Link>
            ))}
          </GridSection>
        </NaviContainer>
        <BoardCard />
      </BoardContainer>
    </BoardWrapper>
  );
};
export default BoardPage;
