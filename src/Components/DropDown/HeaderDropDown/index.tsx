import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDownContainer } from './style';
import DropDownProps from './types';

const DropDown = ({ title, items }: DropDownProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropDownContainer onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span>{title}</span>
      {open && (
        <ul>
          {items.map((item) => (
            <Link to={item.url} key={item.id}>
              <li>
                <span>{item.value}</span>
              </li>
            </Link>
          ))}
          <div className="checked" />
        </ul>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
