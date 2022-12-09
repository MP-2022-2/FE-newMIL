import styled from 'styled-components';
import theme from '@/Styles/theme';

export const YoramWrapper = styled.div`
  display: block;
  width: 100%;
  padding-left: 3rem;
`;
export const DownloadWrapper = styled.div`
  margin-top: 1rem;
  display: block;
  width: 100%;
`;

export const DownloadComponent = styled.div`
  display: flex;
  border: 1px solid;
  height: 3rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  align-items: center;
  padding: 0.75rem;
  :hover {
    cursor: pointer;
    background: #d9d9d9;
  }
`;
