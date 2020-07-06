import React from 'react';

const ValidationComponent = ({ text }) => {

    const validateLength = (len) => {
        return len === 0 ? 0 : len < 5 ? -1 : 1;
    }

    const renderValidation = (text) => {
        const result = validateLength(text.length);
        return result === 0 ? null : result === -1 ? <p>Text too short</p> : <p>Text long enough</p>;
    }

    return(
        <div>
            {renderValidation(text)}
        </div>
    )
}

export default ValidationComponent;
