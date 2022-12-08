import { TitleProps } from './types';
import { TitleWrapper, TitleText } from './style';

export const TitleComponent = (props: TitleProps) => {
  const { titleContent } = props;

  return (
    <TitleWrapper>
      <TitleText>{titleContent}</TitleText>
    </TitleWrapper>
  );
};

export default TitleComponent;
