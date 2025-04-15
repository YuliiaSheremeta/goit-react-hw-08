import css from './HomePage.module.css';

export default function HomePage() { 
    return (
        <div>
           <h1 className={css.title}>Welcome to Smart Contacts</h1>
<p className={css.subtitle}>
  Keep your contacts organized, accessible, and always in sync — wherever you are.
</p>

<ul className={css.features}>
  <li>Effortless contact management</li>
  <li>Smart search with instant results</li>
  <li>Secure login and real-time updates</li>
</ul>
        </div>
    );
};