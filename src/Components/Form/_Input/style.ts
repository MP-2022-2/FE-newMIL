import styled, { css } from 'styled-components';
import theme from '@/Styles/theme';

const LabelTag = styled.label<{ labelGray: boolean }>`
  text-align: left;
  padding-bottom: 0.4rem;
  ${(props) =>
    props.labelGray &&
    css`
      font-weight: 300;
      color: ${theme.color.ajouSilver};
    `}
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

const TextAreaTag = styled.textarea`
  resize: none;
  border-radius: 5px;
  outline: none;
  padding: 1rem;

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

export { LabelTag, InputTag, CaptionTag, TextAreaTag };
