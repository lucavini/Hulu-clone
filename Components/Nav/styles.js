import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  h2 {
    cursor: pointer;
    font-weight: 300;
    transition: 0.1s;
    white-space: nowrap;
    margin-top: 25px;

    &:hover {
      color: #fff;
      transform: scale(1.2);
    }
    &:active {
      color: #d13e3e;
    }
  }

  h2 {
    margin-left: 10%;

    @media (min-width: 810px) {
      margin-left: 5%;
    }
  }

  &:last-child {
    padding-right: 5%;
  }
`;
