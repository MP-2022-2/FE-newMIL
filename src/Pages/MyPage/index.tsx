import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import {
  MyPageContainer,
  ProfileContainer,
  Profile,
  ProfileInfoContainer,
  SubjectContainer,
  Label,
  TrackContainer,
  GpaContainer,
  BoardAdministrationContainer,
  MyPostContainer,
  MyCommentContainer,
  SubjectWrapper,
  BoardAdministrationWrapper,
} from './style';

export default function MyPage() {
  return (
    <MyPageContainer>
      <Header />
      <GridSection col12 center alignColumn>
        <ProfileContainer>
          <Profile />
          <ProfileInfoContainer>
            <h2>홍길동</h2>
            <caption>재학생</caption>
            <p>201999999</p>
          </ProfileInfoContainer>
        </ProfileContainer>
        <SubjectWrapper>
          <Label>수강 과목</Label>
          <SubjectContainer>
            <TrackContainer></TrackContainer>
            <GpaContainer></GpaContainer>
          </SubjectContainer>
        </SubjectWrapper>
        <BoardAdministrationWrapper>
          <Label>게시판 관리</Label>
          <BoardAdministrationContainer>
            <MyPostContainer></MyPostContainer>
            <MyCommentContainer></MyCommentContainer>
          </BoardAdministrationContainer>
        </BoardAdministrationWrapper>
      </GridSection>
    </MyPageContainer>
  );
}
