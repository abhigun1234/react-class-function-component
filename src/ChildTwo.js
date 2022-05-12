import React from 'react';

function ChildTwo(props) {
    function hello(str){
       console.log("hello",str)
    }
    return (
        <div>
         <h1> Hello everone</h1>
         <button onClick={()=>hello("raj")}>call</button>
        </div>
    );
}

export default ChildTwo;