import React from 'react'
import ReactDOM from 'react-dom'
import { animated as a, useSpring } from 'react-spring'
import {ReactComponent as DoubleMass} from '../double_mass_red.svg';
function Weight2(){
    const myHeight = useSpring({
        from:{height:"10px"},
        to:{height:"400px"}
    })
    return ( <div >
        <svg
        width={'150px'}
        height={"300px"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
        style={myHeight.height}
          d="M1.5 16.538l76.533 14.068M1.s967 16.07L78.5 2M1.967 44.117L78.5 58.185M1.967 43.96L78.5 29.892m-77 43.3l76.533 14.069M1.967 72.723L78.5 58.654M1.967 100.771L78.5 114.84M1.967 100.615L78.5 86.546m-77 43.144l76.533 14.069M1.967 129.22L78.5 115.153M1.967 157.269L78.5 171.34M1.967 157.112L78.5 143.044m-77 43.144l76.533 14.07M1.967 185.718L78.5 171.651M1.967 242.06L78.5 227.993M1.967 213.768L78.5 227.836M1.967 213.611L78.5 199.542m-77 72.934l76.533 14.07M1.967 272.006L78.5 257.94M1.967 300.056L78.5 314.124M1.967 243.401L78.5 257.47M1.967 299.9L78.5 285.83m-77 43.3l76.533 14.07M1.967 328.662L78.5 314.593M1.967 356.71L78.5 370.779M1.967 356.554L78.5 342.485m-77 43.144l76.533 14.069M1.967 385.16L78.5 371.091M1.967 413.208L78.5 427.277M1.967 413.052L78.5 398.983m-77 43.144l76.533 14.069M1.967 441.658L78.5 427.59M1.967 498L78.5 483.931M1.967 469.706L78.5 483.775M1.967 469.55L78.5 455.481"
          stroke="#001858"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      </div>
    )

}
export default Weight2;