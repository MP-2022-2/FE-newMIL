import GridSection from '@/Components/Section';
import { BoardListProps } from './types';
import { BoardListContainer, Label, List } from './style';

const temp = [
  {
    title: '이건 게시물',
    createdAt: '2022-10-08',
  },
  {
    title: '이건 게시물',
    createdAt: '2022-10-08',
  },
  {
    title: '이건 게시물',
    createdAt: '2022-10-08',
  },
  {
    title: '이건 게시물',
    createdAt: '2022-10-08',
  },
];

export default function BoardList(props: BoardListProps) {
  const { label, onSearchData } = props;
  return (
    <GridSection col6 gap16 alignColumn>
      <Label>{label}</Label>
      <GridSection col6>
        <BoardListContainer>
          <>
            {temp.map((item, index) => (
              <List key={index}>
                {item.title}
                {item.createdAt}
              </List>
            ))}
          </>
        </BoardListContainer>
      </GridSection>
    </GridSection>
  );
}
