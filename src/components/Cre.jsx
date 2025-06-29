import React from "react";
 export const Vishu = ()=>{


    return (
<>
  
   <Netflix/>
   <Netflix/>
   <Netflix/>
   <Netflix/>
   <Netflix/>


</>
    )
}
 
const Netflix = (props) =>{
    const name = " hiii iam Dynamic value with variables";
    const rating = "8.12";
    const sam = "Hello iam jsx Dynamic value with variables "
    const expression = 5+3;
    let  age = 25;
    const wat = ()=>{
        if(age>18) return "watch"
        else return "not allow"

    }
const returnGenre =()=> {
    const gen = "radhe radhe";
    return gen;
}
//  first tarika hain conditional statement ka
// if(age>18){
//     return(

//         <div>
//             <p>5+3 = {expression}</p>
//         <h1>Radhe Radhe </h1>
//         <img src="queen.jpeg" alt="loaded"  height="100%" width="50%"/>
//         <h1>Name:{name}</h1> 
        
//         <p>
//             Rating:  {rating} 
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//             <p>summary: {sam}</p>
//             <p>Genre:{returnGenre()}</p>
//             <button>not now</button>
//     </div>
//     )
// }


    // compoenets banaya ek jaise ko kitne time use kar sakte

   
    return(
         <div>
            <p>5+3 = {expression}</p>
        <h1>Radhe Radhe </h1>
        <img src="queen.jpeg" alt="loaded"  height="100%" width="50%"/>
        <h1>Name:{name}</h1> 
        
        <p>
            Rating:  {rating} 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>summary: {sam}</p>
            <p>Genre:{returnGenre()}</p>
            {/* <button id="btn">{age>18? "Watch now": "Not Available"}</button> */}
            {/* <button>{wat}</button> */}
            <button>{wat()}</button>

            <p>Hello,{props.Name}</p>
    </div>
    )
}

//  <button>{age>18? "Watch now": "Not Available"}</button> second tarika hain 

export default Netflix;