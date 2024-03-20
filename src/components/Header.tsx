import React, {useEffect, useState} from 'react';
import logo from  '/logo-name.svg'

const Header = () => {
    const [ date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000)

        return () => {
            clearInterval(interval)
        }
    }, []);
    return (
        <header>
            <img src={logo} alt="Result Univerity Logo"/>
            <h3>Result University</h3>

            <span>Время будет сейчас { date.toLocaleTimeString() }</span>
        </header>
    );
};

export default Header;