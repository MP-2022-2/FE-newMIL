import { ListContainer, ListTag } from './style';
import { ListProps } from './types';

const List = (props: ListProps) => {
  const { data, filter } = props;

  const listData = data.filter((val) => {
    if (filter === '') {
      return val;
    }
    return val.name.includes(filter);
  });

  return (
    <ListContainer>
      {listData.map((item, index) => (
        <ListTag key={index}>
          {filter !== '' ? (
            <>
              {item.name.split(filter)[0]}
              <b>{filter}</b>
              {item.name.split(filter)[1]}
            </>
          ) : (
            item.name
          )}
        </ListTag>
      ))}
    </ListContainer>
  );
};

export default List;
