import { CommentTypes } from '@/Pages/Board/Post/types';
import { Icon } from '@iconify/react';
import {
  SubMenuListContainer,
  TitleContainer,
  ListContainer,
  List,
  ListTitle,
  ListElement,
  IsEmpty,
} from './style';
import { SubMenuListProps } from './types';

export default function SubMenuList(props: SubMenuListProps) {
  const { title, hasData, showDate = false, showLiked = false } = props;

  return (
    <SubMenuListContainer>
      <TitleContainer>
        <h3>{title}</h3>
        <Icon width="24" height="24" color="#333333" icon="ic:round-keyboard-arrow-right" />
      </TitleContainer>
      <ListContainer>
        {hasData.length <= 0 && (
          <IsEmpty>
            <div>데이터가 없어요!</div>
          </IsEmpty>
        )}
        {hasData.map((item: CommentTypes, index: number) => (
          <List key={index}>
            <ListTitle>{item.title}</ListTitle>
            {showDate && <ListElement>{new Date(item.createdAt).toLocaleDateString()}</ListElement>}
            {showLiked && (
              <ListElement>
                <Icon width="16" height="16" color="#e6b71e" icon="icon-park-solid:like" />
                <b>{item.like}</b>
              </ListElement>
            )}
          </List>
        ))}
      </ListContainer>
    </SubMenuListContainer>
  );
}
