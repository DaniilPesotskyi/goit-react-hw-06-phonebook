import css from './App.module.css';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, deleteContact } from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filtersSlice';
import { getContacts, getFilters } from '../../redux/selectors';

const App = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilters);
  const dispatch = useDispatch();

  const onHandleAddContact = contact => {
    if (contacts.some(i => i.name === contact.name)) {
      alert(`${contact.name} is already exist!`);
      return;
    }

    dispatch(createContact(contact));
  };

  const onHandleDelContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onSetFilter = query => {
    dispatch(setFilter(query));
  };

  return (
    <div className={css.container}>
      <ContactsForm onSubmit={onHandleAddContact} />
      <ContactsList
        contacts={contacts}
        onDelete={onHandleDelContact}
        filter={filter}
      >
        <ContactsFilter onFilter={onSetFilter} />
      </ContactsList>
    </div>
  );
};

export default App;
