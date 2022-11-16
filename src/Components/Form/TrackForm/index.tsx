import SearchBar from '@/Components/SearchBar';
import { List } from '@/Components/Form';
import { DivideBar } from '@/Components/Form/SignUpForm/style';
import Button from '@/Components/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useDebounce from '@/Utils/Hooks/useDebounce';
import { Subjects } from '@/Utils/Constants/subject';
import { TrackFormContainer, Title, SubTitle } from './style';

const TrackForm = () => {
  const { register, watch } = useForm({ mode: 'onChange' });

  const [search, setSearch] = useState('');
  const debounceValue = useDebounce(search);

  return (
    <TrackFormContainer>
      <Title>수강과목</Title>
      <SubTitle>수강한 과목을 선택해주세요</SubTitle>
      <SearchBar
        context={register('subject', {
          required: true,
          onChange: () => {
            setSearch(watch('subject'));
            // setSearch(e.target.value);
          },
        })}
      />
      <DivideBar />
      <List data={Subjects} filter={debounceValue} />
      <Button>회원가입</Button>
    </TrackFormContainer>
  );
};

export default TrackForm;
