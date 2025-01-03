"use client";

import UserChat from './UserChat';
import AcadChat from './AcadChat';
import LoadingChat from './LoadingChat';
import ErrorChat from './ErrorChat';

import styles from '@/styles/chatbox.module.css';

const getChatResponse = (chat)=> {
    switch(chat.type) {
        case "ai":
            return <AcadChat text={chat.text} />;
        case "user":
            return <UserChat text={chat.text}/>;
        case "loading":
            return <LoadingChat />;
        case "error":
            return <ErrorChat err={chat.text}/>;
    }
}

export default function ChatLog({chats}) {

    return (
        <div className={styles.chat_log}>
            <div className={styles.chat_response}>
                <AcadChat text={`Hello there! 👋 I'm AcadPapa, your friendly K-12 academic tutor. I'm here to help you with your studies, from math and science to English and history. 📚                 
Just let me know what you're working on, and I'll do my best to provide clear and helpful explanations. 😊`} />
            </div>
            {chats.map((chat, index) => (
                <div key={index} className={styles.chat_response}>
                    {getChatResponse(chat)}
                </div>
            ))}
        </div>
    );
}