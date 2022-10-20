import Header from '@/Components/Header';
import { BoardWrapper, MenuContainer, ContentContainer } from './style';

const BoardPage = () => (
  <>
    <Header />
    <BoardWrapper>
      <MenuContainer></MenuContainer>
      <ContentContainer></ContentContainer>
    </BoardWrapper>
  </>
);
export default BoardPage;
