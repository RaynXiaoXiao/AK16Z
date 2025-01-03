"use client";

import { useState } from "react";
import ChatForm from "./ChatForm";
import ChatLog from "./ChatLog";

import styles from '@/styles/chatbox.module.css';

export default function ChatBox() {
    const [chats, setChats] = useState([]);
    const addChat = (chat)=> setChats((prev)=> [...prev, chat]);
    const removeChat = () => setChats((prev) => prev.slice(0, -1));

    return (
        <div className={styles.chatBox}>
            <ChatLog chats={chats}/>
            <ChatForm addChat={addChat} removeChat={removeChat}/>
        </div>
    );
}