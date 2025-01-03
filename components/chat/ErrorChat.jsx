
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function ErrorChat({err}) {
    return (
        <>
            <h2>{<FontAwesomeIcon
                icon={faCircleExclamation}
                color='#C70505'
                style={{marginRight: 10}}
                shake 
            />}AcadPapa</h2>
            <span>Something went wrong, try again later. Error Code: {err}</span>
        </>
    );
}