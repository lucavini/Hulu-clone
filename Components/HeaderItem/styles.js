import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 500px) {
    width: 70px;
  }

  .MenuIcon {
    width: 30px;
    margin-bottom: 5px;
    animation-name: ${({ over }) => (over ? 'bounce' : '')};
    animation-timing-function: linear;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
  }

  p {
    opacity: ${({ over }) => (over ? 1 : 0)};
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;
