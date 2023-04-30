import { Formik, ErrorMessage } from 'formik';
import {
  Button,
  WholeForm,
  Input,
  ErrorCover,
  Text,
  Cover,
} from './PhoneBookForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts-filter/operations';
import { selectItems } from 'redux/contacts-filter/selectors';

const phoneCheck =
  /^(([\\+]*[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{2,4}?[ \\-]*[0-9]{2,4}?$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),

  number: Yup.string()
    .matches(
      phoneCheck,
      'Phone number must be min 4 digits. Can contain spaces, dashes and start with +'
    )
    .required('Phone number is required'),
});

const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const haveName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (haveName) {
      alert(`${name} is already in the contact list`);
      return;
    }

    dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Cover>
      <Text>Add contact</Text>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        <WholeForm>
          <div>
            <Input type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorCover} />
          </div>
          <div>
            <Input type="tel" name="number" placeholder="Number" />
            <ErrorMessage name="number" component={ErrorCover} />
          </div>
          <Button type="submit">Add</Button>
        </WholeForm>
      </Formik>
    </Cover>
  );
};

export default PhoneBookForm;
