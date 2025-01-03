import styles from '@/styles/footer.module.css';

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <h4>Made by <a id={styles.unique}>Jose Leon</a></h4>
        </footer>
    );
}