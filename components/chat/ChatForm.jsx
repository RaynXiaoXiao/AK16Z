import { useState } from 'react';

import Cookies from "js-cookie";
import styles from '@/styles/chatbox.module.css'

export default function ChatForm({addChat, removeChat}) {

    const [busy, isBusy] = useState(false);

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const text = e.target.elements.chat.value;
        e.target.reset();

        if(busy) return;

        addChat({text: text, type: 'user'});
        addChat({type: 'loading'});

        try {
            isBusy(true);
            const res = await fetch('/api/chat', {
                method: 'POST',
                body: JSON.stringify({
                    text: text,
                    session_id: (Cookies.get('session_id') || null),
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if(!res.ok) {
                const err = new Error(res.statusText);
                err.status = res.status;
                throw err;
            }
    
            const resJson = await res.json();
            resJson.session_id && Cookies.set('session_id', resJson.session_id);
            removeChat();
            addChat({text: resJson.text, type: 'ai'});
        } catch(err) {
            removeChat();
            addChat({text: err.status, type: 'error'});
        }
        
        isBusy(false);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input 
                id='chat'
                type="text"
                name="chat"
                maxLength={32768}
                placeholder="Chat with AcadPapa..."
                title="Type here to chat with AcadPapa."
                required />
            <button 
                type="submit"
                aria-label="Send chat message">Send</button>
        </form>
    );
} 