import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Nav.module.css';
import logo from '../assets/logo.webp';








function Nav() {


    const goToFeatures = () => {
        window.scrollTo({
            top: 1400,
            behavior: "smooth"
        });
    }

    const goToContact = () => {
        window.scrollTo({
            top: 5000,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.nav}>
            <Container className={styles.container}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className ={styles.menu}>
                    
                    <li>
                        <div style={{cursor: 'pointer'}} onClick={goToFeatures} >Features</div>
                           
                    </li>
                    <li>
                            <div style={{cursor: 'pointer'}} onClick={goToContact}>Contact</div>
                        
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Nav;