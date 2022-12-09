import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import SearchBar from '@/Components/SearchBar';
import { useForm } from 'react-hook-form';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { useState, useCallback, useEffect } from 'react';
import { userState } from '@/Recoil/user';
import { useRecoilValue } from 'recoil';
import instance from '@/Utils/Api/axios';
import List from './Components/_List';
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
import { MyPageTrackType } from './types';

const switchingRole = (role: string) => {
  if (role === 'ROLE_STUDENT') return '재학생';
  if (role === 'ROLE_GRADUATE') return '졸업생';
  if (role === 'ROLE_ADMIN') return '관리자';
  return '';
};

export default function MyPage() {
  const { register, watch, setValue } = useForm({ mode: 'onChange' });
  const [search, setSearch] = useState('');
  const [IsTrackList, setTrackList] = useState({} as MyPageTrackType);
  const userData = useRecoilValue(userState);
  const [isLoading, setLoading] = useState(false);

  const debounceValue = useDebounce(search);

  const getTrack = useCallback(async () => {
    try {
      await instance('subject/mypage').then((res) => setTrackList(res.data));
    } catch (err) {
      console.log(err);
    }
  }, [userData]);

  useEffect(() => {
    if (isLoading) return;
    getTrack();
  }, [getTrack, isLoading]);

  useEffect(() => {
    setValue('trackSearch', '');
    setSearch('');
  }, [isLoading]);

  return (
    <MyPageWrapper>
      <Header isShownProfileEditor isNotShownEditor isNotShownProfileIcon />
      <MyPageContainer>
        <ProfileContainer>
          <Profile />
          <ProfileInfoContainer>
            <Span>
              <InfoName>{userData.name}</InfoName>
              <InfoNickName>{userData.nickName}</InfoNickName>
            </Span>
            <InfoRole>{switchingRole(userData.identity)}</InfoRole>
            <InfoStudentId>{userData.studentId}</InfoStudentId>
          </ProfileInfoContainer>
        </ProfileContainer>
        <SubjectWrapper>
          <Label>수강 과목</Label>
          <caption>수강했던 과목을 입력해주세요.</caption>
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
                <List
                  sm
                  isMajorList={IsTrackList.majorSubjectList}
                  isNonMajorList={IsTrackList.nonMajorSubjectList}
                  filter={debounceValue}
                  isLoading={isLoading}
                  setLoading={setLoading}
                />
              </TrackContainer>
            </GridSection>
            <GridSection col4>
              <GPA max={128} current={IsTrackList.majorTotal + IsTrackList.nonMajorTotal ?? '0'} />
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
