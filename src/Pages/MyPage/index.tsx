import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import SearchBar from '@/Components/SearchBar';
import { useForm } from 'react-hook-form';
import List from '@/Pages/SignUp/Components/_List';
import { Subjects } from '@/Utils/Constants/subject';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { useState } from 'react';
import { SubjectOriginalType } from '@/@Types/subject';
import {
  MyPageWrapper,
  MyPageContainer,
  ProfileContainer,
  Profile,
  ProfileInfoContainer,
  SubjectContainer,
  Label,
  TrackContainer,
  BoardAdministrationContainer,
  SubjectWrapper,
  BoardAdministrationWrapper,
} from './style';
import BoardList from './Components/BoardList';
import GPA from './Components/GPA';

export default function MyPage() {
  const { register } = useForm({ mode: 'onChange' });
  const [search, setSearch] = useState('');

  const debounceValue = useDebounce(search);

  return (
    <MyPageWrapper>
      <Header />
      <MyPageContainer>
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
            <GridSection col8>
              <TrackContainer>
                <SearchBar context={register('trackSearch')} />
                <List sm data={Subjects} filter={debounceValue} />
              </TrackContainer>
            </GridSection>
            <GridSection col4>
              <GPA max={128} current={64} />
            </GridSection>
          </SubjectContainer>
        </SubjectWrapper>
        <BoardAdministrationWrapper>
          <Label>게시판 관리</Label>
          <BoardAdministrationContainer>
            <BoardList />
            <BoardList />
          </BoardAdministrationContainer>
        </BoardAdministrationWrapper>
      </MyPageContainer>
    </MyPageWrapper>
  );
}
