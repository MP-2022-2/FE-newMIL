import { SectionContainer } from './style';
import GridSectionProps from './types';

const GridSection = ({ children, ...props }: GridSectionProps) => (
  <SectionContainer {...props}>{children}</SectionContainer>
);

export default GridSection;
