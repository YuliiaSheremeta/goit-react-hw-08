import { Link } from 'react-router-dom';  
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to Smart Contacts 📱</h1>
            <p className={css.subtitle}>
                Keep your contacts organized, accessible, and always in sync — wherever you are.
            </p>

            <div className={css.featuresContainer}>
                <h2 className={css.featuresTitle}>Key Features</h2>
                <ul className={css.features}>
                    <li>📞 <strong>Effortless contact management</strong> — Easily add, remove, or edit contacts</li>
                    <li>🔍 <strong>Smart search</strong> — Instant results with advanced filters</li>
                    <li>🔐 <strong>Secure login</strong> — Stay safe with real-time updates and encryption</li>
                </ul>
            </div>

            <div className={css.ctaContainer}>
                {/* Використовуємо Link для перенаправлення на сторінку логіну */}
                <Link to="/login">
                    <button className={css.ctaButton}>Get Started 🚀</button>
                </Link>
            </div>
        </div>
    );
}