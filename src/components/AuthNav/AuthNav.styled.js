import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  color: #bced42;
  &.active {
    padding: 6px 16px;
    background-color: #4b2a99;
    border-radius: 10px;
  }
`;
