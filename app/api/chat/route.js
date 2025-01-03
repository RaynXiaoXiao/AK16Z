import { NextResponse } from 'next/server';
import generativeModel from './vertex';

import { v4 as uuidv4 } from 'uuid';
import { redis } from './redis';

export async function POST(req) {
    try {
        const data = await req.json();

        const text = data.text;
        const uuid = data.session_id || uuidv4();
        const session_id = `sess:${uuid}`;
    
        let chat;
        const exists = await redis.exists(session_id);
        if(!exists) {
            chat = await generativeModel.startChat({});
            await redis.json.set(session_id, "$", ({
                userHistory: {
                    parts: [{text: text}],
                    role: 'user'
                },
                modelHistory: {
                    parts: [{text: 'Hello! I am AcadPapa your K12 Academic tutor.'}],
                    role: 'model'
                }
            }));
            await redis.expire(session_id, 900);
        } else {
            await redis.json.arrappend(session_id, "$.userHistory.parts", {text: text});
            const chatHistory = (await redis.json.get(session_id, "$"))[0];
            chat = generativeModel.startChat({history: [chatHistory.userHistory, chatHistory.modelHistory]});
        }
    
        const chatResponse = (await chat.sendMessage(text)).response.candidates[0].content.parts[0].text;
        await redis.json.arrappend(session_id, "$.modelHistory.parts", JSON.stringify({text: chatResponse}));
        const res = {
            text: chatResponse,
            session_id: uuid,
        }
    
        return NextResponse.json(res, {status: 200});
    } catch(err) {
        console.error(err);
        return NextResponse.json(JSON.stringify(err.message), {status: 500});
    }
}