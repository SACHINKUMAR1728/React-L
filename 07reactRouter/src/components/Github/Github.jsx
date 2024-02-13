import React, { useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";


export default function Github(){
    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(()=>
    // {
    //     fetch('https://api.github.com/users/SACHINKUMAR1728')
    //     .then(response => response.json())
    //     .then(data =>{ console.log(data);
    //     setData(data);
    // })
    // }, [])

    return(
       <>
       
       <div className="text-center bg-gray-600 text-2xl">Followers on Github : {data.followers}
       <img src={data.avatar_url} alt="avtr" width={200} />
        </div>
       </>
        
    );
}

// export const Githubinfoloader = async ()=>{
//    const response = await fetch('https://api.github.com/users/SACHINKUMAR1728');
//    return response.json();
// }