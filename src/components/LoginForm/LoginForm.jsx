import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Form, Input, Label, Span } from './LoginForm.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
}
