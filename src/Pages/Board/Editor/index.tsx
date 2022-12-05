import Header from '@/Components/Header';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input } from '@/Components/Form';
import Button from '@/Components/Button';
import { ButtonContainer, EditorContainer, InputContainer } from './style';

export default function Editor() {
  return (
    <>
      <Header isNotShownEditor />
      <InputContainer>
        <Input type="text" id="title" label="제목" />
      </InputContainer>
      <EditorContainer>
        <span>내용</span>
        <CKEditor
          editor={ClassicEditor}
          config={{}}
          data=""
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
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
        <Button sm>작성</Button>
      </ButtonContainer>
    </>
  );
}
