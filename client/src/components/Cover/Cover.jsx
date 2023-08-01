import styles from './Cover.module.css';

const Cover = () => {
    return (
        <div className={styles.container} id='cover'>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Welcome to IRC Chat!</h1>
                <p className={styles.description}>Fill out the form below to join or create a channel.</p>
            </div>
        </div>
    );
}

export default Cover;