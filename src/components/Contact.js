import styles from './Contact.module.css';
import Container from './Container';

function Contact() {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.ukki}>
                <ul className={styles.links}>
                    <li>Contact</li>
                    <li>team@nufutu.app</li>
                </ul>
                <ul className={styles.formcontainer} >
                  <input className={styles.contactform} placeholder='Name'></input>
                  <input className={styles.contactform} placeholder='Email'></input>
                  <input className={styles.contactform} placeholder='Phone'></input>
                  <textArea className={styles.contactform} style={{height: '140px', width: '335px'}}  placeholder='Type your message'></textArea>
                  <button className={styles.button} type="submit" >submit</button>
                </ul>
                </div>
                <ul className={styles.info}>
                    <li>(주)NUFUTU</li>
                    <li>2022 by Shared Partners LLC</li>
                </ul>
            </Container>

        </div>
    )
}

export default Contact;