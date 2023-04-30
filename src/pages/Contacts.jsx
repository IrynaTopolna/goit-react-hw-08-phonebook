import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhoneBookForm from 'components/PhoneBookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts-filter/operations';
import { selectContacts } from 'redux/contacts-filter/selectors';
import { Cover, Text } from './pages.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Cover>
        <PhoneBookForm />
        <Filter />
      </Cover>

      {isLoading && !error && <Text>Loading contacts...</Text>}
      {error && <Text>{error}</Text>}
      {items.length > 0 ? (
        <ContactsList />
      ) : (
        <Text>You didn't add any contacts yet</Text>
      )}
    </>
  );
}
