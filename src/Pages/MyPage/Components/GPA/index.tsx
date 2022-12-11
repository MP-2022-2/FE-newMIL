import { GPAProps } from './types';
import { GPAContainer, GPAInfo } from './style';

export const GPA = (props: GPAProps) => {
  const { max, current } = props;

  return (
    <GPAContainer>
      <progress id="progress" value={current} max={max}></progress>
      <h2>총 이수 학점</h2>
      <GPAInfo>
        <h1>{current}</h1>
        <h4>/ {max} 학점</h4>
      </GPAInfo>
    </GPAContainer>
  );
};

export default GPA;
