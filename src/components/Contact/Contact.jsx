import { ImPhone,ImUser } from "react-icons/im";
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { AiFillDelete } from "react-icons/ai";
import { openConfirmModal } from '../../redux/contacts/slice';

export default function Contact({ contact }) {
    
    const dispatch = useDispatch();
    
    const handleOpenModal = () => {
        dispatch(openConfirmModal(contact))
    };
    return (
        <div className={css.contactcard}>
            <div>
                <p> <ImUser className={css.icon} /> {contact.name}</p>
                <p> <ImPhone className={css.icon} /> {contact.number}</p>
            </div>
            <button className={css.deletebutton} type="button" onClick={handleOpenModal}> <AiFillDelete /> </button>
        </div>
    );
 };