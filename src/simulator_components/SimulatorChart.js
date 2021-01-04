import React from 'react';
import {curveCatmullRom} from 'd3-shape';
import "react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

export default function SimulatorChart(props) {
  return (
    <XYPlot width={500} height={300}>
      <HorizontalGridLines  />
      <VerticalGridLines  />
      <XAxis
        title="w/w2"
        style={{
          // line: {stroke: '#ADDDE1'},
          // ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fontWeight: 600}
        }}
      />
      <YAxis title="X1/Xst" />
      <LineSeries
        // className="first-series"
        color="grey"
       
        data={props.data}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />
      <LineSeries
        // className="first-series"
        color="red"
        data={[{x:props.line,y:10/1500},{x:props.line,y:20/1500},{x:props.line,y:30/1500},{x:props.line,y:40/1500}]}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />

    </XYPlot>
  );
}