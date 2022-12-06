import { useState } from 'react';
import { LikeButtonContainer, LikeButtonWrapper, LikedScore, HeartIcon } from './style';

export default function LikeButton({ score }: { score: number }) {
  const [isLiked, setLiked] = useState(false);

  return (
    <LikeButtonWrapper>
      <LikedScore isLiked={isLiked}>{score}</LikedScore>
      <LikeButtonContainer>
        <HeartIcon isLiked={isLiked} onClick={() => setLiked(!isLiked)}>
          <svg>
            <path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1" />
            <path d="M11,17 Q16,14,21,20 Q26,14,31,17 Q35,22,31,27 L21,36 L11,27 Q7,22,11,17" />
          </svg>
        </HeartIcon>
      </LikeButtonContainer>
    </LikeButtonWrapper>
  );
}
