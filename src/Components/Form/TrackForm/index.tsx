import SearchBar from '@/Components/SearchBar';
import { List } from '@/Components/Form';
import { DivideBar } from '@/Components/Form/SignUpForm/style';
import Button from '@/Components/Button';
import { TrackFormContainer, Title, SubTitle, TrackContainer, Track } from './style';

const TrackForm = () => (
  <TrackFormContainer>
    <Title>수강과목</Title>
    <SubTitle>수강한 과목을 선택해주세요</SubTitle>
    <SearchBar />
    <TrackContainer>
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
    </TrackContainer>
    <DivideBar />
    <List />
    <Button>회원가입</Button>
  </TrackFormContainer>
);

export default TrackForm;
