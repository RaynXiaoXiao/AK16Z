
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { m } from 'framer-motion';

export default function LoadingChat() {
    return (
        <>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeOut", duration: 2}}>
                <h2>{<FontAwesomeIcon
                    icon={faGraduationCap}
                    color='var(--primary-color)' 
                    style={{marginRight: 10}}
                    flip
                />}AcadPapa</h2>
                <span>Generating response...</span>
            </m.div>
        </>
    );
}