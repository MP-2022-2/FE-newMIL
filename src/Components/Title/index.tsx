import { TitleProps } from './types';
import { TitleWrapper } from './style';

export const TitleComponent = (props: TitleProps) => {
  const { titleContent, subTitleContent } = props;

  return (
    <TitleWrapper>
      <h1>{titleContent}</h1>
      <p>{subTitleContent}</p>
    </TitleWrapper>
  );
};

export default TitleComponent;
