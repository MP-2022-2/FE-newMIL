import GridSection from '@/Components/Section';
import { Link } from 'react-router-dom';
import { BoardListProps } from './types';
import { BoardListContainer, Label, List } from './style';

export default function BoardList(props: BoardListProps) {
  const { data, label, isKindOf } = props;

  return (
    <GridSection col6 gap16 alignColumn>
      <Label>{label}</Label>
      <GridSection col6>
        <BoardListContainer>
          <>
            {data.map((item, index) => (
              <Link
                key={index}
                to={`/board/${item.boardType.toLowerCase()}/${
                  isKindOf === 'post' ? item.id : item.postId
                }`}
              >
                <List>
                  {isKindOf === 'post' ? <b>{item.title}</b> : <b>{item.text}</b>}
                  {new Date(item.createdAt).toLocaleDateString()}
                </List>
              </Link>
            ))}
          </>
        </BoardListContainer>
      </GridSection>
    </GridSection>
  );
}
