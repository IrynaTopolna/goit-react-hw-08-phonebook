import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H1 = styled.p`
  margin: 150px 0 20px;
  text-align: center;
  color: #4b0d81;
  font-size: 36px;
  font-weight: 700;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 36px;
  font-weight: 700;
  color: blue;
`;

export const Span = styled.span`
  font-size: 32px;
  color: #4b0d81;
  font-weight: 700;
`;

export const Div = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #4b0d81;
  text-align: center;
`;

export const Cover = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #4b0d81;
  font-weight: 500;
  text-align: center;
`;
