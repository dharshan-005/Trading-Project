import React, { useState } from 'react';

export default function BacktestPanel() {
  const [strategy, setStrategy] = useState('Moving Average Crossover');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2025-01-01');
  const [results, setResults] = useState(null);

  const runBacktest = () => {
    setResults({
      totalReturn: 15.5,
      maxDrawdown: 8.2,
      tradesExecuted: 25,
    });
  };

  return (
    <>
    <div className='text-white'>
      <h2 className="text-2xl font-bold mb-4">Backtest Strategy</h2>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Strategy</label>
          <select 
            value={strategy} 
            onChange={e => setStrategy(e.target.value)} 
            className="border p-2 w-full"
          >
            <option>Moving Average Crossover</option>
            <option>Mean Reversion</option>
            <option>Momentum</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Start Date</label>
          <input 
            type="date" 
            value={startDate} 
            onChange={e => setStartDate(e.target.value)} 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">End Date</label>
          <input 
            type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} 
            className="border p-2 w-full"
          />
        </div>
        <button 
          onClick={runBacktest} 
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Run Backtest
        </button>
      </div>

      {results && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Backtest Results</h3>
          <p>Total Return: {results.totalReturn}%</p>
          <p>Max Drawdown: {results.maxDrawdown}%</p>
          <p>Trades Executed: {results.tradesExecuted}</p>
        </div>
      )}
    </div>
    </>
  );
}
