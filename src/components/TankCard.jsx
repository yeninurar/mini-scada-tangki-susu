import React from "react";

export default function TankCard({ suhu, level }) {
  const suhuColor = suhu >= 60 ? "bg-red-500" : suhu >= 40 ? "bg-yellow-400" : "bg-green-500";
  const levelColor = level <= 20 ? "bg-red-500" : level <= 50 ? "bg-yellow-400" : "bg-green-500";

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="font-bold mb-2">Tangki Susu</h2>
      <p>Suhu: <span className={`text-white px-2 py-1 rounded ${suhuColor}`}>{suhu ?? "--"}°C</span></p>
      <p>Level: <span className={`text-white px-2 py-1 rounded ${levelColor}`}>{level ?? "--"}%</span></p>
    </div>
  );
}
