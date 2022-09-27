import styled from 'styled-components';
import theme from '@/Styles/theme';

const LabelTag = styled.label`
  text-align: left;
  padding-bottom: 0.4rem;

  @media ${theme.layout.desktop} {
    ${theme.PC.h4}
  }
  @media ${theme.layout.mobile} {
    ${theme.Mobile.h4}
  }
`;

const InputTag = styled.input`
  padding: 0.8rem 0.8rem 0.6rem;
  border-radius: 5px;
  outline: none;
  border: solid 1px #bcbcbc;

  :focus {
    border-color: #0982f0;
  }

  + label {
    margin-top: 1rem;
  }
`;

export { LabelTag, InputTag };
