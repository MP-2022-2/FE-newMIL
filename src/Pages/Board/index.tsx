import Header from '@/Components/Header';
import Navigation from '@/Pages/Board/Components/Navigation';
import GridSection from '@/Components/Section';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@/Recoil/user';
import BoardCard from './Components/BoardCard';
import { BoardWrapper, BoardContainer, NaviContainer } from './style';

export const BoardList = [
  { title: '자유', url: 'free' },
  { title: '질문', url: 'qna' },
  { title: '재학생', url: 'student' },
  { title: '졸업생', url: 'graduate' },
];

const BoardPage = () => {
  const { boardPath } = useParams();
  const userInfo = useRecoilValue(userState);

  return (
    <BoardWrapper>
      <Header />
      <BoardContainer>
        <NaviContainer>
          <GridSection col6 center>
            {BoardList.map((item) => (
              <Link key={item.url} to={`/board/${item.url}`}>
                <Navigation selected={boardPath === item.url} content={item.title} />
              </Link>
            ))}
          </GridSection>
        </NaviContainer>
        <BoardCard target={boardPath ?? 'free'} />
      </BoardContainer>
    </BoardWrapper>
  );
};
export default BoardPage;
