import { useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import { m } from 'framer-motion';

import { Remark } from 'react-remark';
import rehypeSanitize from 'rehype-sanitize';

export default function UserChat({text}) {
    const divRef = useRef(null);

    useEffect(()=> divRef.current.scrollIntoView({behavior: 'smooth', block: 'center'}), []);
    return (
        <>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeOut", duration: 1}}>
                <h2>{<FontAwesomeIcon
                    icon={faUserGraduate}
                    color='white' 
                    style={{marginRight: 13}}
                    />}You</h2>
                <Remark rehypePlugins={[rehypeSanitize]}>
                    {text}
                </Remark>
            </m.div>
            <div ref={divRef}></div>
        </>
    );
}