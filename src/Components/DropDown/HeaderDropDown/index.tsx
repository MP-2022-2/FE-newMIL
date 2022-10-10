import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDownContainer, Title, Dim, DropDownList, ListContent } from './style';
import DropDownProps from './types';

const DropDown = ({ title, items }: DropDownProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropDownContainer onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Title>{title}</Title>
      {open && (
        <DropDownList>
          {items.map((item) => (
            <Link to={item.url} key={item.id}>
              <ListContent>
                <h4>{item.value}</h4>
              </ListContent>
            </Link>
          ))}
          <Dim />
        </DropDownList>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
