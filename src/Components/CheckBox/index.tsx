import { CheckBoxContainer } from './style';
import CheckBoxProps from './types';

const CheckBox = (props: CheckBoxProps) => {
  const { children, handleClick, checked } = props;
  return (
    <CheckBoxContainer>
      <input type="checkbox" id="check" checked={!checked} onClick={handleClick} />
      <label htmlFor="check">{children}</label>
    </CheckBoxContainer>
  );
};

export default CheckBox;
