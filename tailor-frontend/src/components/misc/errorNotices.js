import React from "react";


export default function ErrorNotice(prop) {
    return (
        <div className="error-notice">
            <span >{prop.message}</span>
            <button onClick={prop.clearError}>X</button>

        </div>
    )
}