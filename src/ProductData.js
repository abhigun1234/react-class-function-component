import axios from 'axios';
import React, { useEffect } from 'react';

function ProductData(props) {
    useEffect(()=>{

        axios.get("https://justolearnapp.herokuapp.com/api/addproduct").then(res=>{

        console.log("product data",res.data.result)
        }).catch(error=>{
            console.log("error",error)
        })
    })
    return (
        <div>
            
        </div>
    );
}

export default ProductData;