import React from 'react';

function ChildTwo(props) {
    return (
        <div>
            {props.name}
            {props.address}
        </div>
    );
}

export default ChildTwo;