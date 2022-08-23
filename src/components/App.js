import Nav from '../components/Nav';
import styles from './App.module.css';
import backGround from '../assets/backGround.webp';
import ipone from '../assets/ipone.webp';
import Contact from '../components/Contact';
import Features from '../components/Features';

function App()  {
    return (
       <>
        <Nav className={styles.nav}></Nav>
        <img className={styles.back} src={backGround} alt="backGround" /> 
        <div className={styles.text }> NFT 2.0:<br/> Non-Fungible Object</div>
        <div className={styles.smalltext}> Turn anything you can feel into an NFT</div>
        <img className={styles.internal} src={ipone} alt="ipone" />
        <div className={styles.margin} />
        <Features />
        <Contact className={styles.contact}/>
       </>
    );
}

export default App;