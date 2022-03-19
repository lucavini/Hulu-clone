import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 811px) {
    flex-direction: row;
    justify-content: space-between;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;
