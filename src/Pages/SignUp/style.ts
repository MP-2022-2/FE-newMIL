import styled from 'styled-components';

export const SignUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .select {
    display: flex;
    padding-top: 3rem;
    width: 20rem;
    margin: 0 auto;
    justify-content: center;

    li {
      list-style-type: none;
      padding: 0.6rem 0;
    }

    a {
      font-size: 1.2rem;
      width: 50%;
      color: ${(props) => props.theme.white};
      cursor: pointer;
    }

    .on {
      background-color: ${(props) => props.theme.darkBlue};
    }

    .off {
      background-color: ${(props) => props.theme.ajouBlue};
    }
  }
`;
