import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import SearchBar from '@/Components/SearchBar';
import { useForm } from 'react-hook-form';
import List from '@/Pages/SignUp/Components/_List';
import { Subjects } from '@/Utils/Constants/subject';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { useState, useCallback } from 'react';
import { SubjectOriginalType } from '@/@Types/subject';
import { userState } from '@/Recoil/user';
import { useRecoilValue } from 'recoil';
import instance from '@/Utils/Api/axios';
import {
  MyPageWrapper,
  MyPageContainer,
  ProfileContainer,
  Profile,
  ProfileInfoContainer,
  InfoName,
  InfoNickName,
  InfoRole,
  InfoStudentId,
  Span,
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
  const { register, watch } = useForm({ mode: 'onChange' });
  const [search, setSearch] = useState('');
  const [IsTrackList, setTrackList] = useState([] as unknown as SubjectOriginalType);
  const userData = useRecoilValue(userState);

  const debounceValue = useDebounce(search);

  //   const getTrack = useCallback(() => {
  //     try {
  //       instance(`subject/registration/mypage`).then((res) => setTrackList(res));
  //     } catch (err) {}
  //   }, [idx]);

  return (
    <MyPageWrapper>
      <Header isNotShownProfileIcon />
      <MyPageContainer>
        <ProfileContainer>
          <Profile />
          <ProfileInfoContainer>
            <Span>
              <InfoName>{userData.name}</InfoName>
              <InfoNickName>{userData.nickName}</InfoNickName>
            </Span>
            <InfoRole>{userData.identity}</InfoRole>
            <InfoStudentId>{userData.studentId}</InfoStudentId>
          </ProfileInfoContainer>
        </ProfileContainer>
        <SubjectWrapper>
          <Label>수강 과목</Label>
          <SubjectContainer>
            <GridSection col8>
              <TrackContainer>
                <SearchBar
                  context={register('trackSearch', {
                    onChange: () => {
                      setSearch(watch('trackSearch'));
                    },
                  })}
                />
                <List sm data={Subjects} filter={debounceValue} />
              </TrackContainer>
            </GridSection>
            <GridSection col4>
              <GPA max={128} current={64} />
            </GridSection>
          </SubjectContainer>
        </SubjectWrapper>
        <BoardAdministrationWrapper>
          <BoardAdministrationContainer>
            <BoardList label="내가 쓴 게시물" onSearchData="" />
            <BoardList label="내가 쓴 댓글" onSearchData="" />
          </BoardAdministrationContainer>
        </BoardAdministrationWrapper>
      </MyPageContainer>
    </MyPageWrapper>
  );
}
