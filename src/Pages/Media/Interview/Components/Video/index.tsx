import Header from '@/Components/Header';
import Board from '@/Components/Board';
import GridSection from '@/Components/Section';
import { useRecoilValue } from 'recoil';
import { trackState } from '@/Recoil/theme';
import { VideoProps, VideoTypes } from './types';
import { VideoWrapper, VideoContainer, VideoThumbnail, VideoBox } from './style';

const VideoContents: VideoTypes[] = [
  {
    name: '이정영',
    job: 'UX 디자이너',
    date: '2022-08-03',
    thumbnail: '/pictures/video/leejungyoung.png',
    track: 'CD',
    url: 'https://www.youtube.com/watch?v=_XR52yqYSW4',
  },
  {
    name: '이주석',
    job: 'SW 엔지니어',
    date: '2022-08-03',
    thumbnail: '/pictures/video/leejoosuk.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=VyyWM3C8ky0',
  },
  {
    name: '허홍석',
    job: '애니메이터',
    date: '2017-01-05',
    thumbnail: '/pictures/video/heohongseok.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=X_OkBshZg7k',
  },
];

export const VideoComponent = () => (
  <VideoWrapper>
    {VideoContents.map((item) => (
      <VideoContainer key={item.name}>
        <a href={item.url} target="_blank" rel="noreferrer">
          <GridSection col6>
            <GridSection col4>
              <VideoBox>
                <VideoThumbnail src={item.thumbnail} />
              </VideoBox>
            </GridSection>
            <div>
              <p>{item.name}</p>
              <h2>{item.job}</h2>
              <span>{item.date}</span>
            </div>
          </GridSection>
        </a>
      </VideoContainer>
    ))}
  </VideoWrapper>
);
export default VideoComponent;
