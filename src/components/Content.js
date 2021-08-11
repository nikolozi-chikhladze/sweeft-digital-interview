import { useState, useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive';
import { getMessage } from '../util/util';
import './Content.css';

const Content = () => {
    const {screen} = useResponsive();
    
    const [message, setMessage] = useState(getMessage(screen));

    const updateMessage = () => {
        setMessage(getMessage(screen));
    }

    useEffect(() => {
        updateMessage();
    }, [screen])

    return (
        <div className="message-wrapper">
            <div className="message-card">
                <p className={`message message-${screen}`}>{message}</p>
            </div>
        </div>
    )
}

export default Content
