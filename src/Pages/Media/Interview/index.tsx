import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import { useRecoilValue } from 'recoil';
import { TrackList } from '@/Utils/Constants/track';
import { trackState } from '@/Utils/Stores/Recoil/theme';
import VideoComponent from './Components/Video';
import Navigation from './Components/Track';
import { BoardWrapper, BoardContainer, NaviContainer } from './style';

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
