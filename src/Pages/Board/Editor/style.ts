import styled from 'styled-components';

export const InputTitle = styled.input`
  width: 100%;
  height: 1rem;
  max-width: calc(${({ theme }) => theme.layout.maxWidth} - 2rem);

  padding: 1rem;

  border-radius: 0.625rem;

  font-size: 1.2rem;
`;

export const InputLabel = styled.h2`
  display: block;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 1rem auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.layout.maxWidth};

  margin: 0 auto;
  margin-top: 2rem;

  label {
    font-size: 1.2rem;
  }

  input {
    font-size: 1rem;
  }
`;

export const EditorContainer = styled(InputLabel)`
  margin: 0.5rem auto;

  span {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};
  }

  .ck-content {
    height: 30rem;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1.5rem auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
`;
