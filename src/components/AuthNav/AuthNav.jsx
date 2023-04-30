import { Item, List, StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <List>
      <Item>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </Item>
    </List>
  );
}
