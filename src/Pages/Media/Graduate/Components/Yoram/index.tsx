import TitleComponent from '@/Components/Title';
import { YoramInfo } from '@/Utils/Constants/yoram';
import { YoramWrapper, DownloadWrapper, DownloadComponent } from './style';

const Yoram = () => (
  <YoramWrapper>
    <TitleComponent titleContent="요람" />
    <DownloadWrapper>
      {YoramInfo.map((yoram) => (
        <a href={yoram.downloadLink} key={yoram.yoramYear}>
          <DownloadComponent>
            <h3>{yoram.yoramYear}년도 요람</h3>
          </DownloadComponent>
        </a>
      ))}
    </DownloadWrapper>
  </YoramWrapper>
);

export default Yoram;
