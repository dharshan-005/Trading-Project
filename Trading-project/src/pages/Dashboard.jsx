import React from 'react'
import PriceChart from '../components/PriceChart.jsx'

const Dashboard = () => {
  return (
    <>
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      {/* <p>Welcome to your trading dashboard.</p> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <div>Balance: Rs.1,00,000</div>
        <div>Portfolio Value: Rs.1,65,000</div>
        <div>Recent Trades: 3</div>
      </div>
      <div>
        <h2>Market Snapshot</h2>
        <ul>
          <li>NIFTY 50: 18,250 (+0.42%)</li>
          <li>SENSEX: 61,500 (+0.36%)</li>
        </ul>
      </div>
    </div>
    <PriceChart />
    </>
  )
}

export default Dashboard