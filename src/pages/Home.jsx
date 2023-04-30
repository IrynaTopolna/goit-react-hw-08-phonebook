import { Div, H1, Span, StyledNavLink } from './pages.styled';
import { useAuth } from 'hooks';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <H1>Welcome to PhoneBook App</H1>
      {!isLoggedIn && (
        <Div>
          <StyledNavLink to="/register">Register</StyledNavLink>
          <Span> or </Span>
          <StyledNavLink to="/login">Log In</StyledNavLink>
          <Span> to start</Span>
        </Div>
      )}
    </>
  );
}
