import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function TankChart({ data }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="font-bold mb-2">Grafik Suhu & Level</h2>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="suhu" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="level" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
