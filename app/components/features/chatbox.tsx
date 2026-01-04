'use client'

import { useRef, useState } from "react"

interface Msg {
    msg: string;
    role: 'user' | 'bot'; // Added role to distinguish styling later
}

const Automsg = [
    "Nah, do it yourself.",
    "I'm on break, try again later.",
    "That sounds like a 'you' problem.",
    "I'll think about it... no.",
    "Searching for answers... 404 not found."
]

export const Chatbox = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [messages, setMessages] = useState<Msg[]>([])
    const [automsgIndex, setautomesgIndex] = useState(0)

    const msgHandler = () => {
        const userText = inputRef.current?.value;

        if (userText && userText.trim() !== "") {

            const newUserMsg: Msg = { msg: userText, role: 'user' };


            const randomReply = Automsg[automsgIndex % Automsg.length];

            const newBotMsg: Msg = { msg: randomReply, role: 'bot' };


            setMessages((prev) => [...prev, newUserMsg, newBotMsg]);

            setautomesgIndex((prevIndex) => prevIndex + 1);

            //@ts-ignore
            inputRef.current.value = "";
        }
    }

    return (
        <div className="flex flex-col gap-4 p-10 max-w-md  rounded-lg">

            {/* Message Area: Fixed height and scrollable */}
            <div className="h-48 overflow-y-auto flex flex-col gap-3 p-2 border-b mb-4">
                {messages.map((item, index) => (
                    <div
                        key={index}
                        className={`p-3 rounded-xl max-w-[80%] ${item.role === 'user'
                            ? "bg-blue-600 text-white self-end"
                            : "bg-gray-100 text-black self-start"
                            }`}
                    >
                        {item.msg}
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="flex gap-2 items-center">
                <input
                    ref={inputRef}
                    className="flex-1 border p-2 rounded outline-none"
                    placeholder="Type here..."
                    onKeyDown={(e) => e.key === 'Enter' && msgHandler()}
                />
                <button onClick={msgHandler} className="bg-black text-white px-4 py-2 rounded">
                    Send
                </button>
            </div>
        </div>
    )
}