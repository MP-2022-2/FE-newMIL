import { SectionContainer } from './style';
import GridSectionProps from './types';
import Header from '../Header';
import Footer from '../Footer';

const GridSection = ({
  children,
  div = false,
  hasHeader,
  hasFooter,
  ...props
}: GridSectionProps) => (
  <>
    {hasHeader && <Header />}
    {div && (
      <SectionContainer as="div" {...props}>
        {children}
      </SectionContainer>
    )}
    {div || <SectionContainer {...props}>{children}</SectionContainer>}
    {hasFooter && <Footer />}
  </>
);

export default GridSection;
