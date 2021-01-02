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
        // [{x: 1, y: 13}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]
        data={props.data}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />

    </XYPlot>
  );
}