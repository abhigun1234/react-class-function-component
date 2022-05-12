import React from 'react';
import data from './data/data.json'
function CustomerInfo(props) {
    return (
        <div>
             {data.map(data =>
        <ul>
            {
                <div>
                    <li>{data.first_name}</li>
                    <li>{data.last_name}</li>
                    
                </div>
            }
        </ul>
    )} 
        </div>
    );
}

export default CustomerInfo;