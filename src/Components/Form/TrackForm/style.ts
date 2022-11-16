import styled from 'styled-components';
import { LoginFormContainer } from '@/Components/Form/LoginForm/style';
import theme from '@/Styles/theme';

export const TrackFormContainer = styled(LoginFormContainer)``;

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

export const TrackContainer = styled.section`
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
