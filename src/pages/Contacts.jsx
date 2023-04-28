import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhoneBookForm from 'components/PhoneBookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts-filter/operations';
import { selectContacts } from 'redux/contacts-filter/selectors';
import { Title, Title2 } from './pages.styled';
// import { Helmet } from 'react-helmet';

export default function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <Title>My phonebook</Title>
      {/* </Helmet> */}
      <PhoneBookForm />

      <Title2>My contacts</Title2>
      <Filter />
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 ? <ContactsList /> : <p>There is no contacts yet</p>}
    </>
  );
}
