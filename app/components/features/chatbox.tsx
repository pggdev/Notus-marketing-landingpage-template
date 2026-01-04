'use client'

import { useRef, useState } from "react"



interface Msg {
    msg: string
}



const Automsg: Msg[] = [
    {
        msg: "hello "
    }
]




export const Chatbox = () => {
    const InputRef = useRef(null)
    const [messages, setmessages] = useState<Msg[]>([])


    const msghandler = () => {
        //@ts-ignore
        if (InputRef.current && InputRef.current.value !== "") {
            //@ts-ignore
            setmessages([...messages, { msg: InputRef.current.value }])
            //@ts-ignore
            InputRef.current.value = ""
        }


    }



    return <div className=" flex gap-2 items-center">

        <div className="border border-neutral-200 flex ">
            <input ref={InputRef} type="text" placeholder="enter the msg" className="p-1" />
        </div>

        <button className="p-1 border border-neutral-200" onClick={msghandler}>submit</button>
        {messages.map((items, index) => <h1 key={index}>{items.msg}</h1>)}





    </div>
}