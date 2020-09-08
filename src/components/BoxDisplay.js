import React from 'react';

const BoxDisplay = props => {
    const { color } = props;

    return (
        <div style={{height:'100px', width:'100px', marginRight:'10px', display:'inline-block', background:color}}></div>
        )
}

export default BoxDisplay;