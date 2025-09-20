import React from 'react'

const holdings = [
  { symbol: "Reliance", qty: 10, avg: 2500, current: 2600 },
  { symbol: "HDFC", qty: 8, avg: 1490, current: 1505 }
]

const Portfolio = () => {
  return (
    <>
    <div className='text-white'>
      <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
      {/* <p>Your current investments and positions.</p> */}
      <table>
        <thead>
          <tr>
            <th className='p-2'>Symbol</th>
            <th className='p-2'>Qty</th>
            <th className='p-2'>Avg</th>
            <th className='p-2'>Current Price</th>
            <th className='p-2'>P&L</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding) => (
            <tr key={holding.symbol}>
              <td className='p-2'>{holding.symbol}</td>
              <td className='p-2'>{holding.qty}</td>
              <td className='p-2'>{holding.avg}</td>
              <td className='p-2'>{holding.current}</td>
              <td className='p-2'>{((holding.current - holding.avg) * holding.qty).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Portfolio