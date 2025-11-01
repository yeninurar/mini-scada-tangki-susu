import React, { useState, useEffect } from "react";
import TankCard from "./components/TankCard";
import TankChart from "./components/TankChart";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const [data, setData] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        const newEntry = {
          time: new Date().toLocaleTimeString(),
          suhu: Math.floor(Math.random() * 70),   // 0-70°C
          level: Math.floor(Math.random() * 100)  // 0-100%
        };
        setData(prev => [...prev.slice(-19), newEntry]); // simpan max 20 data
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const resetData = () => setData([]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Mini SCADA Dairyland</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TankCard suhu={data[data.length-1]?.suhu} level={data[data.length-1]?.level} />
        <TankChart data={data} />
      </div>
      <ControlPanel 
        running={running} 
        setRunning={setRunning} 
        resetData={resetData} 
      />
    </div>
  );
}
