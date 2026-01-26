'use client'

import { motion } from "motion/react"

export const Topsvg = () => {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg"
            direction="ltr"
            width="354.76922607421875"
            height="64.76922607421875"
            viewBox="0 0 400 2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-color-mode="light"
            className="grey">

            <line
                x1='40'
                y1=""
                x2='100'
                y2=''
                stroke="var(--color-neutral-100)"

            />
            <line
                x1='0'
                y1="0"
                x2='160'
                y2='0'
                stroke="url(#lineGradient)"
                strokeLinecap="round"


            />
            <line
                x1='160'
                y1="0"
                x2='360'
                y2='0'
                stroke="url(#line2Gradient)"
                strokeLinecap="round"


            />

            <defs>
                <motion.linearGradient
                    id="lineGradient"
                    gradientUnits="userSpaceOnUse"
                    initial={{ x1: '0%', x2: '2%' }}
                    animate={{ x1: '98%', x2: '100%' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                >
                    <stop stopColor="var(--color-neutral-100)" />
                    <stop offset="0.33" stopColor="#3b82f6" />
                    <stop offset="0.66" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="var(--color-neutral-100)" />
                </motion.linearGradient>
            </defs>
            <defs>
                <motion.linearGradient
                    id="line2Gradient"
                    gradientUnits="userSpaceOnUse"
                    initial={{ x1: '0%', x2: '2%' }}
                    animate={{ x1: '98%', x2: '100%' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                >
                    <stop stopColor="var(--color-neutral-100)" />
                    <stop offset="0.33" stopColor="#3b82f6" />
                    <stop offset="0.66" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="var(--color-neutral-100)" />
                </motion.linearGradient>
            </defs>
        </svg>

    </div >
}







export const Bottomsvg = () => {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg"
            direction="ltr"
            width="354.76922607421875"
            height="64.76922607421875"
            viewBox="0 0 400 2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-color-mode="light"
            className="grey rotate-90">

            <line
                x1='40'
                y1=""
                x2='100'
                y2=''
                stroke="var(--color-neutral-100)"

            />
            <line
                x1='0'
                y1="0"
                x2='160'
                y2='0'
                stroke="url(#lineGradient)"
                strokeLinecap="round"


            />

            <defs>
                <motion.linearGradient
                    id="lineGradient"
                    gradientUnits="userSpaceOnUse"
                    initial={{ x1: '0%', x2: '2%' }}
                    animate={{ x1: '98%', x2: '100%' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                >
                    <stop stopColor="var(--color-neutral-100)" />
                    <stop offset="0.33" stopColor="#3b82f6" />
                    <stop offset="0.66" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="var(--color-neutral-100)" />
                </motion.linearGradient>
            </defs>

        </svg>

    </div >
}