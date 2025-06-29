// import React, { useState } from 'react'

// export default function About() {
//  const[mycolor, setMycolor]= useState({
//   color:'white',
//   backgroundColor:'black',
// })
// const [ btntext, setBtntext]= useState("Enable dark mode")
//    const togglestyle = ()=>{
// if(mycolor.color === 'white'){
//   setMycolor({
//      color:'black',
//   backgroundColor:'white',
//   });
// setBtntext('Enable mode')
//   }
//   else{
//      setMycolor({
//      color:'white',
//   backgroundColor:'black',
//   })
// setBtntext('Enable  mode')


//   }
// }

//   return (
//     <div className='container' style={mycolor}>
//       <h1 className="my-2">About us</h1>
//       <div className="accordion" id="accordionExample">
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mycolor}>
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mycolor}>
//       <div className="accordion-body">
//         <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" style={mycolor} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mycolor}>
//       <div className="accordion-body">
//         <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" style={mycolor} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mycolor}>
//       <div className="accordion-body">
//         <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="container" my-3>

//   <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button>
//   </div> 
// </div>
//     </div>
//   )
// }

