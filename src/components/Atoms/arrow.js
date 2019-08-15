import styled from '@emotion/styled';

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-color: ${props => props.color || 'white'};
  margin: 0 0.2rem;
  border-width: ${props => (props.tiny ? '0.3rem 0.3rem' : '0.7rem 0.7rem')};
`;

export const ArrowRight = styled(Arrow)`
  border-top-style: solid;
  border-top-color: transparent;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  border-left-style: solid;
`;

export const ArrowDown = styled(Arrow)`
  border-top-style: solid;
  border-right-style: solid;
  border-right-color: transparent;
  border-left-style: solid;
  border-left-color: transparent;
`;

export const ArrowUp = styled(Arrow)`
  border-bottom-style: solid;
  border-right-style: solid;
  border-right-color: transparent;
  border-left-style: solid;
  border-left-color: transparent;
`;
