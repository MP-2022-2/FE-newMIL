import { Subjects } from '@/Utils/Constants/subject';
import { Icon } from '@iconify/react';
import instance from '@/Utils/Stores/Api/axios';
import { ListContainer, ListTag } from './style';
import { ListProps, DataProps, SubjectProps } from './types';

const List = (props: ListProps) => {
  const { isLoading, setLoading, isMajorList, isNonMajorList, filter, sm = false } = props;

  const listData =
    filter === '' ? isMajorList ?? [] : Subjects.filter((val) => val.subject.includes(filter));

  const postSubject = async (isMajor: boolean, list: SubjectProps | DataProps) => {
    try {
      setLoading(true);
      await instance({
        url: `subject/registration/${isMajor ? 'major' : 'non-major'}`,
        method: 'post',
        data: { subjectList: [list] },
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubject = async (isMajor: boolean, list: string) => {
    try {
      setLoading(true);
      await instance({
        url: `subject/removal/${isMajor ? 'major' : 'non-major'}`,
        method: 'delete',
        data: { subject: list },
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListContainer sm={sm}>
      {filter !== '' &&
        listData.map((item, index) => (
          <ListTag
            key={index}
            isMajor={true}
            onClick={() => {
              postSubject(true, { subject: item.subject, gpa: item.gpa });
            }}
          >
            <div>
              {item.subject.split(filter)[0]}
              <b>{filter}</b>
              {item.subject.split(filter)[1]}
            </div>
            <Icon width="24" height="24" color="#343434" icon="ic:twotone-plus" />
          </ListTag>
        ))}
      {filter !== '' && listData.length <= 0 && (
        <ListTag
          isMajor={false}
          onClick={() => {
            postSubject(false, { subject: filter, gpa: 3 });
          }}
        >
          {filter} <Icon width="24" height="24" color="#343434" icon="ic:twotone-plus" />
        </ListTag>
      )}
      {filter === '' &&
        isMajorList &&
        isMajorList.map((item, index) => (
          <ListTag
            key={index}
            isMajor={true}
            onClick={() => {
              deleteSubject(true, item.subject);
            }}
          >
            {item.subject}
            <Icon width="24" height="24" color="#343434" icon="iconoir:cancel" />
          </ListTag>
        ))}
      {filter === '' &&
        isNonMajorList &&
        isNonMajorList.map((item, index) => (
          <ListTag
            key={index}
            isMajor={false}
            onClick={() => {
              deleteSubject(false, item.subject);
            }}
          >
            {item.subject}
            <Icon width="24" height="24" color="#343434" icon="iconoir:cancel" />
          </ListTag>
        ))}
    </ListContainer>
  );
};

export default List;
