import Header from '@/Components/Header';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input } from '@/Components/Form';
import Button from '@/Components/Button';
import { useState } from 'react';
import instance from '@/Utils/Stores/Api/axios';
import { useForm } from 'react-hook-form';
import useToastMessage from '@/Utils/Hooks/useToastMessage';
import {
  Label,
  Category,
  CategoryWrapper,
  CategoryContainer,
  ButtonContainer,
  EditorContainer,
  InputContainer,
} from './style';
import Navigation from '../Components/Navigation';
import { BoardList } from '../index';

export default function Editor() {
  const { openToastMessage } = useToastMessage();
  const [isCategory, setIsCategory] = useState('free');
  const [isContent, setIsContent] = useState('');

  const { register, getValues, trigger } = useForm({ mode: 'onChange' });

  const postData = async () => {
    await instance({
      method: 'post',
      url: `board/${isCategory}`,
      data: { boardType: isCategory.toUpperCase(), title: getValues('title'), content: isContent },
    })
      .then(() => {
        openToastMessage('글을 작성하였습니다', 'success');
        setTimeout(() => {
          window.location.replace('/board/free');
        }, 1000);
      })
      .catch(() => {
        openToastMessage('알 수 없는 오류가 발생했습니다');
      });
  };

  return (
    <>
      <Header isNotShownEditor />
      <CategoryWrapper>
        <Label>카테고리</Label>
        <CategoryContainer>
          {BoardList.map((item) => (
            <Category key={item.url} onClick={() => setIsCategory(item.url)}>
              <Navigation selected={isCategory === item.url} content={item.title} />
            </Category>
          ))}
        </CategoryContainer>
      </CategoryWrapper>
      <InputContainer>
        <Label>제목</Label>
        <Input
          type="text"
          id="title"
          context={register('title', {
            onChange: () => {
              trigger('title');
            },
          })}
        />
      </InputContainer>
      <EditorContainer>
        <Label>내용</Label>
        <CKEditor
          editor={ClassicEditor}
          config={{}}
          data=""
          onChange={(event, editor) => {
            const data = editor.getData();
            setIsContent(data);
          }}
        />
      </EditorContainer>
      <ButtonContainer>
        <Button sm fifth url="/board/free">
          취소
        </Button>
        <Button type="button" disabled={isContent === ''} onClick={postData} sm>
          작성
        </Button>
      </ButtonContainer>
    </>
  );
}
