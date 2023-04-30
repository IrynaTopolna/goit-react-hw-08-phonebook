import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Cover = styled.div`
  display: block;
`;

export const WholeForm = styled(Form)`
  display: flex;
  align-items: center;
  margin: 0 0 30px;
`;

export const Text = styled.p`
  margin: 100px 0 15px 0;
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  padding: 2px 6px;
  width: 150px;
  margin-right: 20px;
`;

export const Button = styled.button`
  display: block;
  width: 60px;
  height: 36px;
  background-color: #a665e0;
  font-weight: 500;
  font-size: 18px;
  transition: transform 300ms;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ErrorCover = styled.div`
  color: red;
  margin-top: 10px;
  max-width: 150px;
`;
