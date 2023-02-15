import styled from 'styled-components';

export const ToastContainer = styled.div<{ animation: string; color: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  opacity: 0;
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

  animation: 0.35s ${(props) => props.animation} ease-in-out forwards;
  transition: 0.35s ease-in-out;

  @keyframes fadeIn {
    from {
      transform: translateY(-2rem);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
