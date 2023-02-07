import styled from 'styled-components';

export const ContainerCardPost = styled.a`
  max-width: 416px;
  background: ${({ theme }) => theme.post};
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;

  div {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.title};
    }

    span {
      font-size: 0.785rem;
      color: ${({ theme }) => theme.span};
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 24px; /* fallback */
    max-height: 9rem; /* fallback */
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;
