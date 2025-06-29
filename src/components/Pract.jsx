import React from "react";

export const Prac = ()=>{
const Name = ["he;p"]
     
   return(
    <>

   {/* question  <p>{Name.length && "No student found"}</p> */}
    {/* 1st  */}
    {/* <p>{Name.length === 0&& "No student found"}</p> */}
    {/* 2nd  */}
    <p>{!Name.length && "No student found"}</p>
    {/* 3rd */}
    {/* <p>{Name.length && "No student found"}</p> */}

   <p>Number of studnet ={Name.length}</p>


    </>
   )
}

