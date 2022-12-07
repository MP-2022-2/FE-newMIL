import SearchBar from '@/Components/SearchBar';
import Button from '@/Components/Button';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { SubjectOriginalType } from '@/@Types/subject';
import { trackApi } from '@/Utils/Api/SignUpApi';
import List from '../_List';
import { DivideBar } from '../SignUpForm/style';
import {
  SelectContainer,
  TrackFormWrapper,
  TrackFormContainer,
  Title,
  SubTitle,
  SubLink,
} from './style';
import { TrackContext } from '../SignUpForm';

interface TrackProps {
  Id: number;
}

const TrackForm = (props: TrackProps) => {
  const { Id } = props;
  const { register, watch } = useForm({ mode: 'onChange' });
  const { isChosenList } = useContext(TrackContext);
  const [search, setSearch] = useState('');

  const debounceValue = useDebounce(search);

  const onTrackSubmit = async () => {
    trackApi({
      studentId: Id,
      subjectList: isChosenList
        .filter((el: SubjectOriginalType) => !el.visible.valueOf())
        .map((el: SubjectOriginalType) =>
          el.visible === false ? { subject: el.subject, gpa: el.gpa } : el,
        ),
    });
  };

  return (
    <TrackFormWrapper>
      <TrackFormContainer>
        <Title>수강과목</Title>
        <SubTitle>수강한 과목을 선택해주세요</SubTitle>
        <SearchBar
          context={register('subject', {
            required: true,
            onChange: () => {
              setSearch(watch('subject'));
            },
          })}
        />
        <DivideBar />
        <List
          data={isChosenList.filter((el: SubjectOriginalType) => !!el.visible.valueOf())}
          filter={debounceValue}
        />
        <SubLink onClick={() => window.location.replace('/')}>다음에 저장하기</SubLink>
        <Button
          disabled={
            isChosenList.filter((el: SubjectOriginalType) => !el.visible.valueOf()).length === 0
          }
          type="button"
          onClick={onTrackSubmit}
        >
          회원가입
        </Button>
      </TrackFormContainer>
      <SelectContainer>
        <List
          data={isChosenList.filter((el: SubjectOriginalType) => !el.visible.valueOf())}
          filter={''}
          is="chip"
        />
      </SelectContainer>
    </TrackFormWrapper>
  );
};

export default TrackForm;
