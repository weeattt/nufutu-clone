import styles from './Features.module.css';
import first from '../assets/01.png';
import second from '../assets/02.png';
import third from '../assets/03.png';
import fifth from '../assets/05.png';



function Features() {
    return  ( 
        <>
      <div className={styles.box}>
        <div className={styles.bundle}>
          <div style={{fontSize: '46px'}}>Anything</div>
          <div className={styles.line}></div>  
          <div style={{marginTop: '100px'}}> Imagine a world where anything you can touch can also be an NFT. 
             NUFUTU is capable of encrypting invisible and unique coding on anything
             such as textile and leather to make it exist in the digital world as well. </div>
        </div>
        <img className={styles.image} src={first} alt="01" />
      </div> 
      <div className={styles.box}>
        <img className={styles.image} src={second} alt="02" />
        <div className={styles.bundle}>
            <div style={{fontSize: '46px'}}>Scan</div>
            <div className={styles.line}></div>
            <div style={{marginTop: '100px'}}> Anyone with the NUFUTU mobile application can scan
             a non-fungible object, just like scanning a QR code. The scan will provide NFT information and unique contents</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.bundle}>
          <div style={{fontSize: '46px'}}>Trade</div>
          <div className={styles.line}></div>  
          <div style={{marginTop: '100px'}}> You can trade non-fungible objects in our web app.
           NUFUTU provides safe, secure, and satisfying platform that users can trade the digital + physical item. 
           NUFUTU is powered by Fuel Network, the world's fastest modular execution layer
            that delivers massive performance improvements for decentralized applications. </div>
          <img src={fifth} style={{padding: '50px' }} alt="05" />
        </div>
        <img className={styles.image} src={third} alt="01" />
      </div> 
      </>
       );
}

export default Features;