import Header from '@/Components/Header';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input } from '@/Components/Form';
import Button from '@/Components/Button';
import { useState } from 'react';
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
  const [category, setCategory] = useState('자유');
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <>
      <Header isNotShownEditor />
      <CategoryWrapper>
        <Label>카테고리</Label>
        <CategoryContainer>
          {BoardList.map((item) => (
            <Category key={item.url} onClick={() => setCategory(item.title)}>
              <Navigation selected={category === item.title} content={item.title} />
            </Category>
          ))}
        </CategoryContainer>
      </CategoryWrapper>
      <InputContainer>
        <Label>제목</Label>
        <Input type="text" id="title" />
      </InputContainer>
      <EditorContainer>
        <Label>내용</Label>
        <CKEditor
          editor={ClassicEditor}
          config={{}}
          data=""
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            data.length > 0 && setIsEmpty(false);
            data.length <= 0 && setIsEmpty(true);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </EditorContainer>
      <ButtonContainer>
        <Button sm fifth url="/board/free">
          취소
        </Button>
        <Button disabled={isEmpty} sm>
          작성
        </Button>
      </ButtonContainer>
    </>
  );
}
