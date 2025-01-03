import { m } from 'framer-motion';
import ResourceCard from './ResourceCard';

import styles from '@/styles/resources.module.css';

export default function ResourcesPage() {
    return (
        <div className={styles.resourcesContainer}>
            <h2>Looking for more help?</h2>
            <div className={styles.resourcesWrapper}>
                <m.div
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{ease: "easeIn", duration: 0.75}}>
                    <div className={styles.resources}>
                        <ResourceCard
                            imgSrc={'/albert-logo.svg'}
                            imgAlt={'albert.io logo'}
                            link={'https://www.albert.io/'}
                            snippet={'Ideal for AP/SAT/ACT Prep'}
                            description={'Albert.io features a wide range of standards-aligned practice content for AP, Common Core, NGSS, SAT, ACT, and more, catering to both students and educators. Provides many cheatsheets as well.'}
                            buttonDescription={'Check out Albert.io'} 
                            style={{background: '#2271a3'}}
                        />
                        <ResourceCard
                            imgSrc={'/learner-logo.svg'}
                            imgAlt={'learner.com logo'}
                            link={'https://www.learner.com/'}
                            snippet={'Ideal for K12 Level Tutoring'}
                            description={'Learner.com is an online tutoring platform offering personalized, expert tutoring services for students from 2nd grade through adulthood, across a wide range of subjects.'}
                            buttonDescription={'Visit Learner.com'}  
                        />
                        <ResourceCard 
                            imgSrc={'/paperco-logo.webp'}
                            imgAlt={'paper.co logo'}
                            link={'https://www.paper.co/'}
                            snippet={'Ideal for Essay Writing Help'}
                            description={'Paper.co is an educational support platform that offers 24/7 high-impact tutoring and academic resources for K-12 students, including personalized assistance and enrichment programs'}
                            buttonDescription={'Go to Paper.co'}
                        />                        
                    </div>
                </m.div>
            </div>
        </div>
    );
}