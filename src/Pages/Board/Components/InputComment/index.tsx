import instance from '@/Utils/Api/axios';
import { useParams } from 'react-router-dom';
import Input from '@/Components/Form/_Input';
import { useForm } from 'react-hook-form';
import Button from '@/Components/Button';
import { CommentContainer } from './style';

export default function InputComment() {
  const { boardPath, idx } = useParams();
  const { register, getValues, trigger, watch } = useForm({ mode: 'onChange' });

  const postData = async () => {
    await instance({
      method: 'post',
      url: `board/${boardPath}/${idx}/comment`,
      data: { text: getValues('comment') },
    });
  };

  return (
    <CommentContainer>
      <Input
        textarea
        rows={5}
        labelGray
        label="댓글"
        type="text"
        id="comment"
        context={register('comment', {
          onChange: () => {
            trigger('comment');
          },
        })}
      />
      <Button type="button" disabled={!watch('comment')} onClick={postData} md>
        작성
      </Button>
    </CommentContainer>
  );
}
