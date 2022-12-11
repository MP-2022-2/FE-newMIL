import GridSection from '@/Components/Section';
import { VideoContents } from '@/Utils/Constants/video';
import { VideoProps } from './types';
import { VideoWrapper, VideoContainer, VideoThumbnail, VideoBox } from './style';

export const VideoComponent = (props: VideoProps) => {
  const { id } = props;

  return (
    <VideoWrapper>
      {VideoContents.map((item) => (
        <>
          {(id === '전체' || id === item.track) && (
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
          )}
        </>
      ))}
    </VideoWrapper>
  );
};
export default VideoComponent;
