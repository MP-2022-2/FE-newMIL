import { ReactComponent as CancelIcon } from 'icons/cancel.svg';
import { useContext } from 'react';
import { SubjectOriginalType } from '@/@Types/subject';
import { ListContainer, ListTag, ChipContainer, ChipTag } from './style';
import { ListProps } from './types';
import { TrackContext } from '../SignUpForm';

const List = (props: ListProps) => {
  const { data, filter, is = 'default' } = props;
  const { isChosenList, setIsChosenList } = useContext(TrackContext);

  const listData = data.filter((val) => {
    if (filter === '') {
      return val;
    }
    return val.subject.includes(filter);
  });

  const onToggle = (target: string, isShown: boolean) => {
    setIsChosenList(
      isChosenList.map((val: SubjectOriginalType) =>
        val.subject === target ? { ...val, visible: isShown } : val,
      ),
    );
  };

  return (
    <>
      {is === 'default' && (
        <ListContainer>
          {listData.map((item, index) => (
            <ListTag
              key={index}
              onClick={() => {
                onToggle(item.subject, false);
              }}
              {...props}
            >
              {filter !== '' ? (
                <>
                  {item.subject.split(filter)[0]}
                  <b>{filter}</b>
                  {item.subject.split(filter)[1]}
                </>
              ) : (
                item.subject
              )}
            </ListTag>
          ))}
        </ListContainer>
      )}
      {is === 'chip' && (
        <ChipContainer>
          {listData.map((item, index) => (
            <ChipTag key={index} onClick={() => onToggle(item.subject, true)}>
              {item.subject}
              <CancelIcon width=".5rem" />
            </ChipTag>
          ))}
        </ChipContainer>
      )}
    </>
  );
};

export default List;
