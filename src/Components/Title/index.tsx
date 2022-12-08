import { TitleProps } from './types';
import { TitleWrapper } from './style';

export const TitleComponent = (props: TitleProps) => {
  const { titleContent } = props;

  return (
    <TitleWrapper>
      <h1>{titleContent}</h1>
    </TitleWrapper>
  );
};

export default TitleComponent;
