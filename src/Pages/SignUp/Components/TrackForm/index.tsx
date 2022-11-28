import SearchBar from '@/Components/SearchBar';
import Button from '@/Components/Button';
import { useForm } from 'react-hook-form';
import { useState, createContext } from 'react';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { Subjects } from '@/Utils/Constants/subject';
import { SubjectType } from '@/@Types/subject';
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

export const TrackContext = createContext({
  choose: [] as any,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  setChooseHandler: (event: any) => {},
});

const TrackForm = () => {
  const { register, watch } = useForm({ mode: 'onChange' });

  const [search, setSearch] = useState('');
  const [list, setList] = useState(Subjects);
  const debounceValue = useDebounce(search);

  return (
    <TrackContext.Provider value={{ choose: list, setChooseHandler: setList }}>
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
          <List data={list.filter((el) => !!el.visible.valueOf())} filter={debounceValue} />
          <SubLink>다음에 저장하기</SubLink>
          <Button disabled>회원가입</Button>
        </TrackFormContainer>
        <SelectContainer>
          <List data={list.filter((el) => !el.visible.valueOf())} filter={''} is="chip" />
        </SelectContainer>
      </TrackFormWrapper>
    </TrackContext.Provider>
  );
};

export default TrackForm;
