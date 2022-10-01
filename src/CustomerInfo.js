import axios from 'axios';
import React, { useEffect } from 'react';
import data from './data/data.json'

function CustomerInfo(props) {
    
    useEffect(()=>{

        axios.get("https://justolearnapp.herokuapp.com/api/addproduct").then(res=>{
            console.log("data",res.result)

        }).catch(error=>{
            console.log("error",error)
        })
    },null)
    return (
        <div>
             {data.map(data =>
        <ul>
            {
                <div>
                    <li>Name:{data.first_name}</li>
                    <li>Last Name{data.last_name}</li>
                    <li>Email{data.email}</li>
                </div>
            }
        </ul>
    )} 
        </div>
    );
}

export default CustomerInfo;