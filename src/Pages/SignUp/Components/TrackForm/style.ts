import styled from 'styled-components';
import theme from '@/Styles/theme';
import { LoginFormContainer } from '../../../Login/Components/LoginForm/style';

export const TrackFormContainer = styled.section`
  display: block;
  width: 22rem;
`;

export const SubLink = styled.p`
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
`;

export const SelectContainer = styled.aside`
  width: 16rem;
  margin-left: 2rem;
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
