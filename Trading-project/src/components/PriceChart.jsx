import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [ 
      {
        label: 'Price',
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: 'rgba(220, 38, 38)',
        backgroundColor: 'rgba(0, 0, 0)',
        fill: true,
        tension: 0.3
      }
    ]
}

const options = {
    responsive: true,
    plugins : {
        legend: { position: 'top' }
    }
}

const PriceChart = () => {
  return (
    <>
    <div>
      <h2>Price Chart</h2>
      <Line data={data} options={options} />
    </div>
    </>
  )
}

export default PriceChart