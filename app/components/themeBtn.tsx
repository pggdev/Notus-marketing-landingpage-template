"use client"

import { IconMoon, IconSunHighFilled } from '@tabler/icons-react';
import { useState } from 'react';

export const ThemeBtn = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')


    return <div className=''>

        {theme === 'light' && <button onClick={() => setTheme('dark')} > <IconSunHighFilled /> </button>}
        {theme === 'dark' && <button onClick={() => setTheme('light')} > <IconMoon /> </button>}




    </div>
}