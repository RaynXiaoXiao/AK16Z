import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/about.module.css'

export default function About() {
    return (
        <div className={styles.heroContainer}>
            <h1>About AcadPapa</h1>
            <p>
                AcadPapa was built for the Innocation&rsquo;s Tech for All 2024
                Hackathon, to facilitate access of tutoring for students today.
                It leverages the power of AI to provide free tutoring across a standard
                K12 academic curriculum and is also a fun tool for anyone who just wants to learn.
                If you want to learn how to build something like this check the links below
            </p>
            <div className={styles.techContainer}>
                <div className={styles.techElement}>
                    <Link href={"https://react.dev/learn"} target='_blank'>
                        <Image
                            src={'./react-logo.svg'}
                            width={128}
                            height={128}
                            alt='React Logo' 
                        />
                    </Link>
                </div>
                <div className={styles.techElement}>
                    <Link href={"https://nextjs.org/learn"} target='_blank'>
                        <Image
                            src={'./nextjs-logo.svg'}
                            width={128}
                            height={128}
                            alt='React Logo' 
                        />
                    </Link>
                </div>
                <div className={styles.techElement}>
                    <Link href={"https://redis.io/learn"} target='_blank'>
                        <Image
                            src={'./redis-logo.svg'}
                            width={128}
                            height={128}
                            alt='React Logo' 
                        />
                    </Link>
                </div>
                <div className={styles.techElement}>
                    <Link 
                        href={"https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"}
                        target='blank'>
                        <Image
                            src={'./vertexai-logo.svg'}
                            width={128}
                            height={128}
                            alt='React Logo' 
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}