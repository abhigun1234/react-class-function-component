import logo from './logo.svg';
import './App.css';

import data from './data/data.json'
import Child from './Child';
import FuncComponent from './FuncComponent';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import CustomerInfo from './CustomerInfo';
//adding
function App() {
 console.log("data",data)
  return (
    <div>
    {/* {data.map(data =>
        <ul>
            {
                <div>
                    <li>{data.first_name}</li>
                    
                </div>
            }
        </ul>
    )} */}
    {/* <Child name="raj" address="singapur"></Child> */}
    {/* <FuncComponent></FuncComponent> */}
    {/* <ChildOne name="ravi" address="singapur"></ChildOne>
    <ChildTwo></ChildTwo> */}
    {/* <ChildOne name="kavi" address="singapur"></ChildOne>
    <ChildOne name="raj" address="singapur"></ChildOne>
    <ChildTwo name="Abhi" address="London"></ChildTwo> */}
    <CustomerInfo></CustomerInfo>
</div>
  );
}

export default App;
