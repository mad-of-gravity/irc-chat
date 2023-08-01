import styles from './Footer.module.css';
import { CaretUpFilled, FacebookFilled, WindowsFilled, AppleFilled, AndroidFilled } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <a href='#cover' className={styles.anchor}> <CaretUpFilled /> &nbsp;&nbsp;To the top</a>
                <div className={styles.logos}>
                    <FacebookFilled className={styles.logo} />
                    <WindowsFilled className={styles.logo} />
                    <AppleFilled className={styles.logo} />
                    <AndroidFilled className={styles.logo} />
                </div>
                <div className={styles.developedBy}>
                    Developed by &nbsp; <span className={styles.developer}>Daniel Basarboliev</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;