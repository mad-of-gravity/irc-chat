import styles from './Description.module.css';

const Description = ({ title, bodyContent }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
            </header>
            <div className={styles.body}>
                {bodyContent}
            </div>
        </div>
    );
}

export default Description;