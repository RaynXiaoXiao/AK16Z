import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/resources.module.css'

export default function ResourceCard({imgSrc, imgAlt, link, snippet, description, buttonDescription, style}) {
    return (
        <div className={styles.resourcesCard}>
            <Link href={link} target='_blank'>
                <Image
                    src={imgSrc}
                    style={style}
                    width={400}
                    height={200}
                    alt={imgAlt}
                />
            </Link>
            <div className={styles.resourceSnippet}>
                <h4>{snippet}</h4>
            </div>
            <p>{description}</p>
            <Link href={link} target='_blank' style={{textDecoration: "none"}}>
                <button className={styles.button}>{buttonDescription}</button>
            </Link>
        </div>
    );
}