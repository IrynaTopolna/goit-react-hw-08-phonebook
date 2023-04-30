import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c3d1c0;
  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);
  background-color: rgba(188, 237, 66, 0.5);
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #4b0d81;
  margin: 8px 0;
`;

export const Number = styled.span`
  margin-bottom: 8px;
`;

export const Button = styled.button`
  background-color: #a665e0;
  font-weight: 500;
  font-size: 18px;
  padding: 4px 20px;
  width: 100px;
  margin: 0 auto 10px;
  transition: transform 300ms;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
