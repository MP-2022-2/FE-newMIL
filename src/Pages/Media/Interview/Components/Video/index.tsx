import GridSection from '@/Components/Section';
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
    name: '이재준',
    job: '테크니컬 디렉터',
    date: '2022-08-03',
    thumbnail: '/pictures/video/leejaejun.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=Dpbik1dK4HY',
  },
  {
    name: '고성진',
    job: '인디게임 개발자',
    date: '2022-08-03',
    thumbnail: '/pictures/video/kosungjin.png',
    track: 'GI',
    url: 'https://www.youtube.com/watch?v=ZWVvs1nhfWQ',
  },
  {
    name: '임홍준',
    job: '머신러닝 엔지니어',
    date: '2022-08-03',
    thumbnail: '/pictures/video/imhongjoon.png',
    track: 'MD',
    url: 'https://www.youtube.com/watch?v=rLIGvw1rNaM',
  },
  {
    name: '김순현',
    job: '소프트웨어 그래픽스 엔지니어',
    date: '2021-07-08',
    thumbnail: '/pictures/video/kimsunhyun.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=vo1TvFrYpvc',
  },
  {
    name: '윤기태',
    job: '머신러닝 엔지니어',
    date: '2021-07-08',
    thumbnail: '/pictures/video/yungitae.png',
    track: 'MD',
    url: 'https://www.youtube.com/watch?v=eQ2eeBmho6M',
  },
  {
    name: '하정현',
    job: '게임 프로그래머',
    date: '2021-07-08',
    thumbnail: '/pictures/video/hajunghyun.png',
    track: 'GI',
    url: 'https://www.youtube.com/watch?v=YQpWzvp_Lbs',
  },
  {
    name: '문석호',
    job: '뮤직비디오 감독',
    date: '2021-07-08',
    thumbnail: '/pictures/video/munsukho.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=_RLfJbmOe2M',
  },
  {
    name: '이동호',
    job: '코드 아카데미 교육연구원',
    date: '2021-07-08',
    thumbnail: '/pictures/video/leedongho.png',
    track: 'CD',
    url: 'https://www.youtube.com/watch?v=q_V5gk75uhU',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-9.png',
    track: '',
    url: 'https://www.youtube.com/watch?v=A5DH4cNK_ds',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-8.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=ABcjS5RLPyM',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-7.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=zyZDZrfjMO0',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-6.png',
    track: 'GI',
    url: 'https://www.youtube.com/watch?v=OBqhTx_u0fc',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-5.png',
    track: 'GI',
    url: 'https://www.youtube.com/watch?v=jkuHX_CWnio',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-4.png',
    track: 'CD',
    url: 'https://www.youtube.com/watch?v=nxsYk832R1A',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-3.png',
    track: '',
    url: 'https://www.youtube.com/watch?v=VcU1kEejZDA',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-2.png',
    track: 'GI',
    url: 'https://www.youtube.com/watch?v=DtI0DDFcJ3g',
  },
  {
    name: '',
    job: '2018 홈커밍 데이',
    date: '2018-08-24',
    thumbnail: '/pictures/video/mil-1.png',
    track: '',
    url: 'https://www.youtube.com/watch?v=HvyIPET4ofQ',
  },
  {
    name: '허홍석',
    job: '애니메이터',
    date: '2017-01-05',
    thumbnail: '/pictures/video/heohongseok.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=X_OkBshZg7k',
  },
  {
    name: '이사무엘',
    job: 'UI 디자이너',
    date: '2020-11-01',
    thumbnail: '/pictures/video/leesamuel.jpg',
    track: 'CD',
    url: 'https://www.youtube.com/watch?v=KNQLZcrIEbA',
  },
  {
    name: '김경주',
    job: '교육 컨텐츠 개발자',
    date: '2020-11-01',
    thumbnail: '/pictures/video/kimgyungjoo.jpg',
    track: 'CD',
    url: 'https://www.youtube.com/watch?v=bdvv-vYdPxg',
  },
  {
    name: '김재복',
    job: '솔루션 개발자',
    date: '2017-01-05',
    thumbnail: '/pictures/video/kimjaebok.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=szFsKtqg2kk',
  },
  {
    name: '이광호',
    job: '게임 데이터 분석가',
    date: '2017-01-08',
    thumbnail: '/pictures/video/leekwangho.png',
    track: 'GI',
    url: 'https://www.youtube.com/watch?v=oL77MKNsGp8',
  },
  {
    name: '제민규',
    job: '빅데이터 분석가',
    date: '2020-11-01',
    thumbnail: '/pictures/video/jaemingyu.png',
    track: 'MD',
    url: 'https://www.youtube.com/watch?v=cAxKNiEeaME',
  },
  {
    name: '정일진',
    job: '영상 기획 제작',
    date: '2020-11-01',
    thumbnail: '/pictures/video/jungiljin.jpg',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=XibFJXNtRTc',
  },
  {
    name: '장인규',
    job: '클라이언트 프로그래머',
    date: '2020-11-01',
    thumbnail: '/pictures/video/janginkyu.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=iSdqKpf9JEM',
  },
  {
    name: '한상빈',
    job: 'IT 프로그래머',
    date: '2020-11-01',
    thumbnail: '/pictures/video/hansangbin.jpg',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=63O16gRQeZU',
  },
  {
    name: '정운설',
    job: 'VR 프로젝트 매니저',
    date: '2020-11-01',
    thumbnail: '/pictures/video/jungunseol.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=UrjVmtvL-ts',
  },
  {
    name: '신동혁',
    job: '사운드 디렉터',
    date: '2020-11-01',
    thumbnail: '/pictures/video/sindonghyuk.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=jY413SfvbWk',
  },
  {
    name: '김지환',
    job: '경영/창업',
    date: '2020-11-01',
    thumbnail: '/pictures/video/kimjihwan.jpg',
    track: '',
    url: 'https://www.youtube.com/watch?v=2feQcj_Nifc',
  },
  {
    name: '백종일',
    job: '데이터 분석 마케터',
    date: '2020-11-01',
    thumbnail: '/pictures/video/baekjongil.png',
    track: 'MD',
    url: 'https://www.youtube.com/watch?v=AZb9IjBdgFk',
  },
  {
    name: '김영민',
    job: '영화제작 프로듀서',
    date: '2020-11-01',
    thumbnail: '/pictures/video/kimyoungmin.png',
    track: 'DE',
    url: 'https://www.youtube.com/watch?v=Y8aYRceNOSA',
  },
  {
    name: '안영훈',
    job: '서버 관리',
    date: '2020-11-01',
    thumbnail: '/pictures/video/anyounghun.png',
    track: 'VC',
    url: 'https://www.youtube.com/watch?v=J8zOjcStwSI',
  },
  {
    name: '박상수',
    job: '웹 디자이너',
    date: '2017-01-05',
    thumbnail: '/pictures/video/parksangsu.jpg',
    track: 'CD',
    url: 'https://www.youtube.com/watch?v=GFcWot7eDhE',
  },
];

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