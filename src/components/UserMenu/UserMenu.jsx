import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() { 
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logOut());
    }
    return (
        <div className={css.menu}>
            <p className={css.welcome}>Welcome, {user.name}</p>
            <button type='button' onClick={handleLogout} className={css.button}>Logout</button>
</div>
    );
};