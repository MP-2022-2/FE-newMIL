import styled from 'styled-components';
import theme from '@/Styles/theme';
import { LoginFormContainer } from '../../../Login/Components/LoginForm/style';

export const TrackFormContainer = styled.section`
  display: block;
  width: 22rem;

  @media ${theme.layout.mobile} {
    max-width: 90%;
    flex-direction: column;

    max-width: 50vw;
    width: 50vw;
  }
`;

export const SubLink = styled.caption`
  display: block;
  padding: 2rem 0 0.5rem;
  text-decoration: underline;
  color: ${theme.color.ajouSilver};
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  text-align: center;
  padding-bottom: 1.2rem;
`;

export const SubTitle = styled.h4`
  text-align: center;
  font-weight: 300;
  color: ${theme.color.ajouSilver};
  padding-bottom: 2rem;
`;

export const TrackFormWrapper = styled(LoginFormContainer)`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  flex-direction: row;

  @media ${theme.layout.mobile} {
    max-width: 90%;
    flex-direction: column;

    max-width: 50vw;
    width: 50vw;
    margin-bottom: 7rem;
  }
`;

export const SelectContainer = styled.aside`
  width: 16rem;
  margin-left: 2rem;

  @media ${theme.layout.mobile} {
    max-width: 90%;
    flex-direction: column;

    max-width: 50vw;
    width: 50vw;
    margin: 1rem 0;
  }
`;

export const TrackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Track = styled.button`
  width: 4rem;
  height: 3rem;
  border-radius: 10px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ajouGold};
`;
