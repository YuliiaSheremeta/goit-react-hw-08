import { useSelector } from 'react-redux';
import Navigation from "../Navigation/Navigation";
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.container}>
         <nav className={css.nav}>
        <div className={css.left}>
            <Navigation />
        </div>
        <div className={css.rigth}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </nav>
      </div> 
    </header>
  );
}