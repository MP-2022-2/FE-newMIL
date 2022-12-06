import Header from '@/Components/Header';
import Board from '@/Components/Board';
import GridSection from '@/Components/Section';
import { useRecoilValue } from 'recoil';
import { trackState } from '@/Recoil/theme';
import Navigation from './Components/Track';

import { BoardWrapper, BoardContainer, NaviContainer } from './style';

const TrackList = [
  {
    name: '게임&인터렉티브 콘텐츠',
    link: '/pictures/GI.png',
  },
  {
    name: '디지털 엔터테인먼트',
    link: '/pictures/DE.png',
  },
  {
    name: '미디어 데이터',
    link: '/pictures/MD.png',
  },
  {
    name: '비주얼 컴퓨팅',
    link: '/pictures/VC.png',
  },
  {
    name: '콘텐츠 디자인',
    link: '/pictures/CD.png',
  },
];

const InterviewPage = () => {
  const select = useRecoilValue<string>(trackState);

  return (
    <BoardWrapper>
      <Header />
      <BoardContainer>
        <NaviContainer>
          <GridSection col12 center>
            {TrackList.map((list) => (
              <Navigation key={list.name} select={select === list.name} content={list.name} />
            ))}
          </GridSection>
        </NaviContainer>
      </BoardContainer>
    </BoardWrapper>
  );
};
export default InterviewPage;
