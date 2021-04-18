import React from 'react';

function PlayerList(props) {
//    const  names=['soham','mohan','rohan']
//    const persons=[{name:'abhi'},{name:'ravi'}]
     const ipLTeams=[{name:'mumbai',owner:'ambani'},
     {name:'pune'},
     {name:'delhi'},
     {name:'punjab'},
     {name:'hyd'}]
    return (
        <div>
            {/* <h1>{names[0]}</h1>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            */}
           {/* { persons.map(person=><h2>{person.name}</h2>)} */}
                 {/* { persons.map(person=>  <ul>
               <li>{person.name}</li>
           </ul>)} */}
             {ipLTeams.map(team=><ul><li>{team.name}</li></ul>)}         
        </div>
    );
}
export default PlayerList;