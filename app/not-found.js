import Link from 'next/link';

import styles from '@/styles/notfound.module.css';

export default function NotFound() {

    return (
        <div className={styles.notFound}>
            <h1><i>404</i> Page Not Found :(</h1>
            <form>
                <Link href={'/'}>
                    <button>Go Home</button>
                </Link>
            </form>
        </div>
    );
}