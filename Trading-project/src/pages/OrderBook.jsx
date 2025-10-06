import React, { useEffect, useState } from 'react';



export default function OrderBook() {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orderbook')
      .then(res => res.json())
      .then(data => {
        setBids(data.bids || []);
        setAsks(data.asks || []);
      });
  }, []);

  return (
    <>
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Book</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2 text-green-600">Bids</h3>
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, i) => (
                <tr key={i}>
                  <td className="p-2 text-green-600">₹{bid.price}</td>
                  <td className="p-2">{bid.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-red-600">Asks</h3>
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {asks.map((ask, i) => (
                <tr key={i}>
                  <td className="p-2 text-red-600">₹{ask.price}</td>
                  <td className="p-2">{ask.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
