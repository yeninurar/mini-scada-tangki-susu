import React from "react";

export default function ControlPanel({ running, setRunning, resetData }) {
  return (
    <div className="mt-4 flex gap-4">
      <button 
        onClick={() => setRunning(!running)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {running ? "Stop" : "Start"}
      </button>
      <button 
        onClick={resetData}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
}
