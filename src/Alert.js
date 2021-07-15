import React, { useEffect } from 'react'
import './App.css'
function Alert({ msg, removeAlert, list }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeout);
    }, [list, removeAlert])



    return <p className={`alert`}>
        {msg}
    </p>

}

export default Alert
