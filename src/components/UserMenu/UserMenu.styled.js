import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #bced42;
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #bced42;
  font-weight: 500;
  font-size: 22px;
  padding: 6px 20px;
  color: #4b0d81;
  transition: transform 300ms;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
