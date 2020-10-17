import React from 'react';
import './style.css';

function Page(props) {
    const {
        id    
    } = props;

    return (
        <div id={id} className="erno">
        </div>               
    );
}

export default Page;
