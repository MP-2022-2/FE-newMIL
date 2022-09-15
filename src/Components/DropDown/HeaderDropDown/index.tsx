import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDownContainer } from './style';
import DropDownProps from './types';

const DropDown = ({ title, items }: DropDownProps): ReactElement => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <DropDownContainer onClick={() => toggle()}>
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
        </ul>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
