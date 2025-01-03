import { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { Remark } from 'react-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

import { m } from 'framer-motion';

export default function AcadChat({text}) {
    const divRef = useRef(null);

    useEffect(()=> divRef.current.scrollIntoView({behavior: 'smooth', block: 'center'}), []);

    return (
        <>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeOut", duration: 1}}
                >
                <h2>{<FontAwesomeIcon
                    icon={faGraduationCap}
                    color='var(--primary-color)' 
                    style={{marginRight: 10}}
                />}AcadPapa</h2>
                <Remark rehypePlugins={[rehypeMathjax]} remarkPlugins={[remarkMath]}>
                    {text}
                </Remark>
            </m.div>
            <div ref={divRef}></div>
        </>
    );
}