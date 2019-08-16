import styled from '@emotion/styled';

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  height: ${props => props.height || '2rem'};
  opacity: 0.5;
  &:focus {
    outline: 0 none;
    border-bottom-color: #4666ff;
  }
`;
