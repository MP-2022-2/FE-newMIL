import styled, { css } from 'styled-components';
import theme from '@/Styles/theme';

const LabelTag = styled.label`
  text-align: left;
  padding-bottom: 0.4rem;
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

const CaptionTag = styled.span<{ visible: string | boolean | undefined }>`
  visibility: hidden;
  color: ${theme.color.bad};
  font-weight: 700;
  text-align: left;
  padding: 0.2rem 0 0.5rem;

  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      padding-bottom: 1rem;
    `}
`;

export { LabelTag, InputTag, CaptionTag };
