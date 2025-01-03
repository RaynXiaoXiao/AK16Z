"use client"

import { LazyMotion, domAnimation, m } from 'framer-motion';
import ChatBox from '@/components/chat/ChatBox';
import ResourcesPage from '@/components/ResourcesPage';

import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className={styles.hero_container}>
          <m.div
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ease: "easeOut", duration: 1.25}}>
            <h1 className={styles.heading}>Let&rsquo;s learn with<br/><a id={styles.heading_unique}>AcadPapa</a></h1>
          </m.div>
        <ChatBox />
        <ResourcesPage />
      </div>
    </LazyMotion>
  );
}