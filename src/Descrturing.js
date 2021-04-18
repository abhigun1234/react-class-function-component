import React from 'react';

function Descrturing(props) {
    const {name,address}=props
    return (
        <div>
            {name}
            {address}
        </div>
    );
}

export default Descrturing;