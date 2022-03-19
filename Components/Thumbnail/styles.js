import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  transition: all ease-in-out 0.2s;

  @media (min-width: 811px) {
    max-width: 390px;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 950px) {
    max-width: 450px;
  }

  @media (min-width: 1024px) {
    max-width: 320px;
  }

  @media (min-width: 1280px) {
    max-width: 430px;
  }

  @media (min-width: 1600px) {
    max-width: 490px;
  }

  .description {
    padding: 5px;

    h2 {
      margin-top: 5px;
      font-size: 20px;
      font-weight: bold;
    }

    p {
      font-weight: 300;
      white-space: nowrap;
      width: 100%;
      overflow: hidden; /* "overflow" value must be different from "visible" */
      text-overflow: ellipsis;

      .likes {
        width: 25px;
      }
    }

    .info {
      opacity: ${({ over }) => (over ? 1 : 0)};
    }
  }
`;
