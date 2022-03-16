import React, { useState } from 'react'
import "./LessText.css";

export default function Task(props) {

    const [read, setRead] = useState(false);

    function setText() {
        if (read) {
            return props.text;
        }

        return props.text.substring(0, props.maxLength);
    }

    function setButtonText() {
        if (read) {
            return " read less";
        }

        return "...read more";
    }

    return (
        <p>{setText()} <button className='Button' onClick={() => setRead(!read)}> {setButtonText()} </button></p>
    )
}