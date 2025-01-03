import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

import styles from '@/styles/nav.module.css';

export default function NavMenu() {
    return (
        <header>
            <nav className={`${styles.nav}`}>
                <div className={styles.leftHeader}>
                    <Link href={'./'} className={styles.header}>{
                        <FontAwesomeIcon 
                        icon={faGraduationCap} 
                        className={styles.icon}
                        />
                    }AcadPapa</Link>
                </div>
                <div className={styles.rightHeader}>
                    <ul>
                        <li>
                            <Link href={'./about'}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>  
        </header>
    );
}