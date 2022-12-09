import GridSection from '@/Components/Section';
import instance from '@/Utils/Api/axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BoardListProps, BoardListTypes } from './types';
import { BoardListContainer, Label, List } from './style';

export default function BoardList(props: BoardListProps) {
  const { isLoading, label, onSearchData } = props;
  const [hasList, setList] = useState<BoardListTypes[]>([]);

  const getData = useCallback(async () => {
    try {
      if (onSearchData === 'user/mine/my-post') {
        await instance(`${onSearchData}?size=5&page=0&sort=id,DESC`).then((res) =>
          setList(res.data.postDtoList),
        );
      } else if (onSearchData === 'user/mine/my-comment') {
        await instance(`${onSearchData}?size=5&page=0&sort=id,DESC`).then((res) =>
          setList(res.data.commentDtoList),
        );
      }
    } catch (err) {
      console.log(err);
    }
  }, [isLoading]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <GridSection col6 gap16 alignColumn>
      <Label>{label}</Label>
      <GridSection col6>
        <BoardListContainer>
          {onSearchData === 'user/mine/my-post' && (
            <>
              {hasList.map((item, index) => (
                <Link key={index} to={`board/${item.boardType}/${item.id}`}>
                  <List>
                    <b>{item.title}</b>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </List>
                </Link>
              ))}
            </>
          )}
          {onSearchData === 'user/mine/my-comment' && (
            <>
              {hasList.map((item, index) => (
                <Link key={index} to={`board/${item.boardType}/${item.postId}`}>
                  <List>
                    <b>{item.text}</b>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </List>
                </Link>
              ))}
            </>
          )}
        </BoardListContainer>
      </GridSection>
    </GridSection>
  );
}
