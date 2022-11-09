import { CheckBoxContainer } from './style';
import CheckBoxProps from './types';

const CheckBox = (props: CheckBoxProps) => {
  const { children, handleClick } = props;
  return (
    <CheckBoxContainer>
      <input type="checkbox" id="check" onClick={handleClick} />
      <label htmlFor="check">{children}</label>
    </CheckBoxContainer>
  );
};

export default CheckBox;
