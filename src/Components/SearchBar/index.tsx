import { SearchBarContainer, Input } from './style';
import { SearchBarProps } from './types';

const SearchBar = (props: SearchBarProps) => {
  const { context } = props;
  return (
    <SearchBarContainer>
      <Input {...context} />
    </SearchBarContainer>
  );
};

export default SearchBar;
