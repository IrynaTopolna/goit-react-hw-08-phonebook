import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Div, Name, Number } from './Contact.styled';
import { deleteContact } from 'redux/contacts-filter/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Div>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Div>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
