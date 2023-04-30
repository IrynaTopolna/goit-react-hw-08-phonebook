import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 90px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 240px;
  margin-bottom: 14px;
  padding: 4px;
`;

export const Button = styled.button`
  background-color: #a665e0;
  font-weight: 500;
  font-size: 18px;
  padding: 4px 20px;
  width: 100px;
  margin-left: 70px;
  transition: transform 300ms;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
