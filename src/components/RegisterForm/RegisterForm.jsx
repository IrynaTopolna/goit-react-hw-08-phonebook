import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Input, Label, Span } from './RegisterForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Username</Span>
        <Input type="text" name="name" autoComplete="username" />
      </Label>
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
      <Button type="submit">Register</Button>
    </Form>
  );
}
