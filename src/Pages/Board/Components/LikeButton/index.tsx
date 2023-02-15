import { useState } from 'react';
import instance from '@/Utils/Stores/Api/axios';
import { useParams } from 'react-router-dom';
import useToastMessage from '@/Utils/Hooks/useToastMessage';
import { LikeButtonContainer, LikeButtonWrapper, LikedScore, HeartIcon } from './style';

export default function LikeButton({ score, status }: { score: number; status: boolean }) {
  const [isLiked, setLiked] = useState(status);
  const [hasScore, setScore] = useState(score);
  const { boardPath, idx } = useParams();
  const { openToastMessage } = useToastMessage();

  const postData = async () => {
    await instance({
      method: 'post',
      url: `board/${boardPath}/${idx}/postlike`,
    })
      .then(() => {
        if (isLiked) {
          setScore(hasScore - 1);
          openToastMessage('좋아요를 취소하였습니다', 'success');
        } else {
          openToastMessage('좋아요를 눌렀습니다', 'success');
          setScore(hasScore + 1);
        }
      })
      .catch(() => {
        openToastMessage('알 수 없는 오류가 발생했습니다');
      });

    setLiked(!isLiked);
  };

  return (
    <LikeButtonWrapper>
      <LikedScore isLiked={isLiked}>{hasScore}</LikedScore>
      <LikeButtonContainer>
        <HeartIcon isLiked={isLiked} onClick={postData}>
          <svg>
            <path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1" />
            <path d="M11,17 Q16,14,21,20 Q26,14,31,17 Q35,22,31,27 L21,36 L11,27 Q7,22,11,17" />
          </svg>
        </HeartIcon>
      </LikeButtonContainer>
    </LikeButtonWrapper>
  );
}
