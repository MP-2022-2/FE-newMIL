import SearchBar from '@/Components/SearchBar';
import Button from '@/Components/Button';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { SubjectOriginalType } from '@/@Types/subject';
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
  onTrackSubmit: () => void;
}

const TrackForm = (props: TrackProps) => {
  const { onTrackSubmit } = props;
  const { register, watch } = useForm({ mode: 'onChange' });
  const { isChosenList } = useContext(TrackContext);
  const [search, setSearch] = useState('');

  const debounceValue = useDebounce(search);

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
