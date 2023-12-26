import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext();


export const Context =(props)=>{
    const [clothes,setClothes] = useState([])
    console.log(clothes)


    useEffect(()=>{
        axios('http://localhost:3001/clothes')
            .then(({data})=>setClothes(data))
    },[])



    const value = {
    clothes,
        setClothes
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}