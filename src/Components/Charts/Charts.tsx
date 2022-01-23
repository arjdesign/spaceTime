import React from 'react';
import {
    CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis,
    YAxis
} from "recharts";
import { data } from '../../Data/data';

  const Chart = () => {
      return (
        <LineChart
        width={1200}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 600,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      )
  }

  export default Chart;