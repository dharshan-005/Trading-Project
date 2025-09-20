import React, { useState } from 'react'

const Trade = () => {
  const [symbol, setSymbol] = useState('')
  const [qty, setQty] = useState('')
  const [priceType, setPriceType] = useState('Market')

  // const handleTrade = () => {
  //   // Handle trade logic here
  //   console.log(`Trading ${qty} of ${symbol} at ${priceType}`)
  // }

  return (
    <>
    <div className='text-white'>
      <h1 className="text-2xl font-semibold mb-4">Trade</h1>
      {/* <p>Execute your trades and manage orders here.</p> */}
      {/* <div>
        <input
          type="text"
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleTrade}>Trade</button>
      </div> */}
      <form className="bg-black rounded shadow p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Symbol</label>
          <input type="text" className="mt-1 border rounded w-full p-2" value={symbol} onChange={e => setSymbol(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input type="number" className="mt-1 border rounded w-full p-2" value={qty} onChange={e => setQty(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Order Type</label>
          <select className="mt-1 border rounded w-full p-2" value={priceType} onChange={e => setPriceType(e.target.value)}>
            <option>Market</option>
            <option>Limit</option>
            <option>Stop</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Place Order</button>
      </form>
    </div>
    </>
  )
}

export default Trade