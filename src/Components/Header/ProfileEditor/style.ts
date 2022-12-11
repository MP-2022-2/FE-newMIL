import styled from 'styled-components';
import theme from '@/Styles/theme';

export const ProfileEditorContainer = styled.div``;

export const EditorModal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fefefe;
  z-index: 9999;

  border-radius: 0.625rem;

  padding: 5rem;
  max-width: calc(${theme.layout.maxWidth} / 6);

  border: 2px solid ${theme.color.ajouSky};
  ${theme.common.shadowDefault}

  h2 {
    text-align: center;
    padding-bottom: 2rem;
  }

  input {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2rem;
    + button {
      margin-top: 1rem;
    }
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const Dim = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;

  opacity: 0.65;
  background-color: #333333;

  z-index: 9998;
`;
