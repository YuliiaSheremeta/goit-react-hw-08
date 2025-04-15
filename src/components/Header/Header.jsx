import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/slice';


export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header>
      <nav>
        {!isLoggedIn ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/contacts">Contacts</Link>
            <button onClick={() => dispatch(logoutUser())}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

