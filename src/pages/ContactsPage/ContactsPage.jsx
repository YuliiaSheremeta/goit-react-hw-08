import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectError,selectIsFormVisible,selectIsSearchVisible,selectContacts } from '../../redux/contacts/selectors';
import { toggleFormVisibility, toggleSearchVisibility,hideForm,hideSearch } from '../../redux/contacts/slice';
import { VscSearch } from "react-icons/vsc";
import { HiMiniUserPlus } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import css from './ContactsPage.module.css'

export default function ContactsPage() {
  
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
 
  const isFormVisible = useSelector(selectIsFormVisible);
  const isSearchVisible = useSelector(selectIsSearchVisible);

  const handleToggleSearch = () => {
    dispatch(toggleSearchVisibility());
    dispatch(hideForm());
  }
  
  const handleToggleForm = () => {
    dispatch(toggleFormVisibility());
    dispatch(hideSearch());  }
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.main}>
      <div className={css.container}>
        <p className={css.title}>Your contacts</p>
         <NavLink className={css.link} onClick={handleToggleSearch}> <VscSearch className={ css.search} /> </NavLink>
       <button className={css.fab} onClick={handleToggleForm}>
  <HiMiniUserPlus className={css.fabIcon} />
</button>
      </div>
      {isFormVisible && <div className={css.fadeIn}><ContactForm /></div>}
      {isSearchVisible && <div className={css.fadeIn}><SearchBox /></div>}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred, please try again...</p>}
      {contacts.length > 0 && <ContactList />}
    </main>
  )
}


