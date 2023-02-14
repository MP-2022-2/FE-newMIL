import styled from 'styled-components';
import { ToastProps } from './types';

export const ToastContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 0 auto;
  padding: 0.4rem 2rem 0.4rem 1.75rem;

  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  -webkit-box-shadow: -0.5px 1.5px 15px -2px ${(props) => props.color};
  -moz-box-shadow: -0.5px 1.5px 15px -2px ${(props) => props.color};
  box-shadow: -0.5px 1.5px 15px -2px ${(props) => props.color};
`;
