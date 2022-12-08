import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import { useRecoilValue } from 'recoil';
import { trackState } from '@/Recoil/theme';
import VideoComponent from './Components/Video';
import Navigation from './Components/Track';
import { BoardWrapper, BoardContainer, NaviContainer } from './style';
import { TrackTypes } from './types';

export const TrackList: TrackTypes[] = [
  {
    id: 'GI',
    name: '게임&인터렉티브 콘텐츠',
    link: '/pictures/track/GI.png',
  },
  {
    id: 'DE',
    name: '디지털 엔터테인먼트',
    link: '/pictures/track/DE.png',
  },
  {
    id: 'MD',
    name: '미디어 데이터',
    link: '/pictures/track/MD.png',
  },
  {
    id: 'VC',
    name: '비주얼 컴퓨팅',
    link: '/pictures/track/VC.png',
  },
  {
    id: 'CD',
    name: '콘텐츠 디자인',
    link: '/pictures/track/CD.png',
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
            {TrackList.map((item) => (
              <Navigation
                isSelectedTrack={item.id}
                key={item.name}
                select={select === item.id}
                content={item.name}
                icon={item.link}
              />
            ))}
          </GridSection>
        </NaviContainer>
        <VideoComponent id={select} />
      </BoardContainer>
    </BoardWrapper>
  );
};
export default InterviewPage;
