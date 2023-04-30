import { useAuth } from 'hooks';
import { Item, List, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <List>
      <Item>
        <StyledNavLink to="/">Home</StyledNavLink>
      </Item>
      <Item>
        {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      </Item>
    </List>
  );
}
