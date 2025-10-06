import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes ,  Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Market from './pages/Market.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Trade from './pages/Trade.jsx'
import Reports from './pages/Reports.jsx'
import Loading from './components/Loading.jsx'
import SentimentPanel from './pages/SentimentPanel.jsx'
import MonteCarloPanel from './pages/MonteCarloPanel.jsx'
import BacktestPanel from './pages/BacktestPanel.jsx'
import OrderBook from './pages/OrderBook.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Router>
        <div className='flex min-h-screen bg-black pl-5 overflow-x-hidden'>
          {/* <Sidebar /> */}
          <div className='flex-1 flex flex-col'>
            <Navbar />
            <main className='flex-1'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/market' element={<Market />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/trade' element={<Trade />} />
                <Route path='/reports' element={<Reports />} />
                {/* <Route path="/montecarlo" element={<MonteCarloPanel />} /> */}
                {/* <Route path="/sentiment" element={<SentimentPanel />} /> */}
                <Route path="/orderbook" element={<OrderBook />} />
                {/* <Route path="/backtestpanel" element={<BacktestPanel />} /> */}
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;