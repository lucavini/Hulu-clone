import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  & .fade {
    position: absolute;
    width: 50px;
    height: 100px;
    top: 16%;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(6, 32, 42, 0.464005585144214) 11%,
      rgba(6, 32, 42, 1) 64%,
      rgba(6, 32, 42, 1) 98%
    );
  }

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
