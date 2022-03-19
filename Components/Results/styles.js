import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 25px;
  padding: 5px 20px;

  @media (min-width: 811px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1px;
    justify-items: center;
  }

  @media (min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
