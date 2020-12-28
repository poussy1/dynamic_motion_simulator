import React from 'react'

import { useSpring } from "@react-spring/core"
// Platform knowledge is in here ...
import { animated } from "@react-spring/web"
import './weight3.css'

function SpringImageAnimatedByAdjustableHeight({minHeight,maxHeight}){ console.log("spring adjustable height comp props:",minHeight,maxHeight)
  // const [minHeightS,setMinHeightS] = React.useState(minHeight)
  // const [maxHeightS,setMaxHeightS] = React.useState(maxHeight)
  // React.useEffect(()=>{
  //   setMinHeightS(minHeight)
  //   setMaxHeightS(maxHeight)
  // },[minHeight,maxHeight])
  const [myProps, set] = useSpring(() => ({
   
    from: { number:minHeight },
    to: { number: maxHeight },
    loop : {reverse:true}
  }));

  return <div className="springBase" >
    
    <animated.svg width="100px"  height={myProps.number}   style={{position:"absolute",bottom:"0"}} viewBox="0 0 150 100" preserveAspectRatio="none"> 
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
    to: { number: props.maxHeight},
    loop:{reverse:true}
    
  }));
  var minTop = -(parseInt(props.minHeight)+25)
  var maxTop = -(parseInt(props.maxHeight)+25)
  const [topSpring, setT] = useSpring(() => ({
    from: { top: `${minTop}px` },
    to: { top: `${maxTop}px` },
    loop:{reverse:true}   
    }
  ));
  return <div style={{position:"relative",top:"100px",left:"45%"}}>
   
    <animated.div  style={topSpring} className="mass mass1">M_2<span className="k">K_2</span></animated.div>
   
    <animated.svg width="100px" height={myProps.number} style={{position:"absolute",bottom:"0",left:"14px"}} viewBox="0 0 150 100" preserveAspectRatio="none"> 
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
    <div className="mass mass2">M_1 <span className="k">K_1</span></div> 
  </div>
}
function SpringImageAnimatedAdjustableTop1(props){
  // const[tInitial,setTInitial] = React.useState(props.tInitial)
  // const[tFinal,setTFinal]     = React.useState(props.tFinal)
  // React.useEffect(()=>{
  //   setTInitial(props.tInitial)
  //   setTFinal(props.tFinal)
  // },[props.tInitial,props.tFinal])
  const [topSpring, setTopSpring] = useSpring(() => ({
    from: { top:props.tInitial },
    to:  { top:props.tFinal},
    loop:{reverse:true}  
    }
  ));


  // style={topSpring}
  return  <div  className="movingSpringContainer" >

     <animated.div style={topSpring} className="firstSpring" >
     
       <SpringImageAnimatedByAdjustableHeightWithMass minHeight="50px" maxHeight="150px"/>
   
     </animated.div>
     
 </div>
}
function MainComp(props){
  console.log("main comp props:",props)

  return <div className="springs">
      
  
       <SpringImageAnimatedAdjustableTop1 class='doubleDispSpeing'tInitial="150px" tFinal={`${200-props.baseSpringHeight}px`}/>
       <SpringImageAnimatedByAdjustableHeight class="singleDispSpring" minHeight="50" maxHeight={`${props.baseSpringHeight.toString()}`}/>
      
       {/* <SpringImageAnimatedAdjustableTop1 class='doubleDispSpeing'tInitial="150px" tFinal={`50px`}/>
       <SpringImageAnimatedByAdjustableHeight class="singleDispSpring" minHeight="50" maxHeight={`150`}/> */}
     
      
       <div className="ground"></div>
  
    </div>
}
export default MainComp
