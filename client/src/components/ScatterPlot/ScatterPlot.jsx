import React from 'react';
import { observer } from 'mobx-react';
import { ScatterChart, Scatter, XAxis, 
  YAxis, CartesianGrid } from 'recharts';
import { LABELS } from '../../utils/labels';

export const ScatterPlot = observer(({data}) => {
  return (
    <>
      <h2>{LABELS.output}</h2>
      {
        data.length ? (
          <ScatterChart width={400} height={400}>
              <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
              <XAxis type="number" dataKey={(v)=>parseInt(v.x)} allowDataOverflow={true}/>
              <YAxis type="number" dataKey={(v)=>parseInt(v.y)} allowDataOverflow={true}/>
              <Scatter data={data} fill="green" />
          </ScatterChart>
        ) : <div>{LABELS.scatterPlotMessage}</div>
      }
      
    </>
  )
})