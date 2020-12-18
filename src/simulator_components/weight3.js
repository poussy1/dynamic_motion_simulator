import React from 'react'

import { useSpring, animated } from 'react-spring'

import './weight3.css'
/////////////////////////solution 1///////////////////////////
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
////////////////////////////solution 2//////////////////////////
function SpringImageAnimatedByAdjustableHeight(props){
  const [myProps, set] = useSpring(() => ({
    from: { number: props.minHeight },
    to: async (next) => {
      while (1) {
        await next({number: props.maxHeight });
        await next({ number: props.minHeight});
      }
    }
  }));

  return <div style={{position:"relative",top:"276px"}}>
 
    <animated.svg width="100px"  height={myProps.number}   style={{position:"absolute",bottom:"0",left:"200px"}} viewBox="0 0 150 100" preserveAspectRatio="none"> 
     <g > 
        <animated.g  className="container">
        <g>
          <rect fill="#fff" id="canvas_background" height="102" width="102" y="-1" x="-1"/>
          <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
          <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
          </g>
        </g>
        <g>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="279" x2="-17.25" y1="281" x1="-21.25" stroke-width="1.5" stroke="#000" fill="none"/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_8" y2="32" x2="72.75" y1="31" x1="72.75" stroke-width="1.5" stroke="#000" fill="none"/>
          <g stroke="null" id="svg_9">
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="21.82165" x2="52.47826" y1="-6" x1="52.47826" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="39.70701" x2="1.69565" y1="22.48408" x1="52.47826" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="45.66879" x2="96.30435" y1="40.36943" x1="1" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="68.19108" x2="3.08696" y1="46.33121" x1="97" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="78.78981" x2="54.56522" y1="68.8535" x1="3.08695" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_7" y2="98" x2="53.17391" y1="79.45223" x1="53.17391" stroke-width="1.5" fill="none"/>
          </g>
        </g>
        </animated.g>
    </g>
    </animated.svg>
  </div>
}
function SpringImageAnimatedByAdjustableHeightWithMass(props){
  const [myProps, set] = useSpring(() => ({
    from: { number: props.minHeight },
    to: async (next) => {
      while (1) {
        await next({number: props.maxHeight });
        await next({ number: props.minHeight});
      }
    }
  }));
  const [topSpring, setT] = useSpring(() => ({
    from: { top: "-70px" },
    to: async (next) => {
      while (1) {
        await next({ top: "-120px" });
        await next({ top: "-70px"});
      }
    }
  }));
  return <div style={{position:"relative",top:"288px",left:"183px"}}>

    <animated.div  style={topSpring} className="mass mass1"></animated.div>
  
    <animated.svg width="100px" height={myProps.number} style={{position:"absolute",bottom:"0",left:"200px"}} viewBox="0 0 150 100" preserveAspectRatio="none"> 
     <g > 
        <animated.g  className="container">
        <g>
          <rect fill="#fff" id="canvas_background" height="102" width="102" y="-1" x="-1"/>
          <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
          <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
          </g>
        </g>
        <g>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="279" x2="-17.25" y1="281" x1="-21.25" stroke-width="1.5" stroke="#000" fill="none"/>
          <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_8" y2="32" x2="72.75" y1="31" x1="72.75" stroke-width="1.5" stroke="#000" fill="none"/>
          <g stroke="null" id="svg_9">
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="21.82165" x2="52.47826" y1="-6" x1="52.47826" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="39.70701" x2="1.69565" y1="22.48408" x1="52.47826" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="45.66879" x2="96.30435" y1="40.36943" x1="1" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="68.19108" x2="3.08696" y1="46.33121" x1="97" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="78.78981" x2="54.56522" y1="68.8535" x1="3.08695" stroke-width="1.5" fill="none"/>
          <line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_7" y2="98" x2="53.17391" y1="79.45223" x1="53.17391" stroke-width="1.5" fill="none"/>
          </g>
        </g>
        </animated.g>
    </g>
    </animated.svg>
    <div className="mass mass2"></div> 
  </div>
}
function SpringImageAnimatedAdjustableTop1(props){
  const [topSpring, setHeight] = useSpring(() => ({
    from: { top: props.tInitial },
    to: async (next) => {
      while (1) {
        await next({ top:props.tInitial });
        await next({ top:props.tFinal});
      }
    }
  }));
  // style={topSpring}
  return  <div  className="springOne" >

     <animated.div style={topSpring} className="firstSpring" >
       
       <SpringImageAnimatedByAdjustableHeightWithMass minHeight="50px" maxHeight="100px"/>
     </animated.div>
   
 </div>
}
function MainComp(props){
  const springLengthAtRest = 125
  var displacement = 130
  var minHeight = springLengthAtRest+"px"
  var maxHeight = (springLengthAtRest+displacement)+"px"
  return <div >

       {/* <SpringImageAnimatedAdjustableTop1 class='doubleDispSpeing'tInitial="230px" tFinal="210px"/>
       <SpringImageAnimatedByAdjustableHeight class="singleDispSpring" minHeight="50px" maxHeight="70px"/>
      */}
       <SpringImageAnimatedAdjustableTop1 class='doubleDispSpeing'tInitial="230px" tFinal="180px"/>
       <SpringImageAnimatedByAdjustableHeight class="singleDispSpring" minHeight="50px" maxHeight="100px"/>
     
     
    </div>
}
export default MainComp
