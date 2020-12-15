import React from 'react'

import { useSpring, animated } from 'react-spring'

import './weight3.css'

function SpringImage(props){
    return  <svg> 
    <g style={{transform:"translate(0px,35px)"}}> 
       <g style={{transform:"scaleY(1.55)"}}>
     
         <path 
           d="M1.5 16.538l76.533 14.068M1.967 16.07L78.5 2M1.967 44.117L78.5 58.185M1.967 43.96L78.5 29.892m-77 "
           stroke="#001858" 
          
         />
       </g>
   </g>
   </svg>
}
function SpringImageAnimated(props){
  const [myProps, set] = useSpring(() => ({
    from: { transform: "scaleY(1)" },
    to: async (next) => {
      while (1) {
        await next({transform: "scaleY(1)" });
        await next({ transform: "scaleY(2) "});
      }
    }
  }));



  return <div>
    
    <animated.svg > 
     <g style={{transform:" translate(0px, 80px)"}}> 
        <animated.g  style={myProps}  className="container">
      
          <path 
            d="M1.5 16.538l76.533 14.068M1.967 16.07L78.5 2M1.967 44.117L78.5 58.185M1.967 43.96L78.5 29.892m-77 "
            stroke="#001858" 
           
          />
        </animated.g>
    </g>
    </animated.svg>
    </div>
}

function LEDS(props){
   const [myProps, set] = useSpring(() => ({
    from: { transform: "scaleY(1)" },
    to: async (next) => {
      while (1) {
        await next({transform: "scaleY(1)" });
        await next({ transform: "scaleY(1.75) "});
      }
    }
  }));

  const [topSpring, setHeight] = useSpring(() => ({
    from: { top: "114px" },
    to: async (next) => {
      while (1) {
        await next({ top: "50px" });
        await next({ top: "114px"});
      }
    }
  }));
  // style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}
  return <div >
   
    <div style={{position:"relative",marginTop:"-50px"}}>
      <animated.div className="firstSpring" style={topSpring}>
        <div className="mass secondMass"></div>
        <div> <SpringImage /> </div>
        <div className="mass firstMass"></div>
      </animated.div>
      <div style={{position: "absolute",left: "35%",top:" 169px"}}>
        <SpringImageAnimated />
      </div> 
    
    </div>
   </div>
}
export default LEDS