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
        <div className='flex min-h-screen bg-gray-500'>
          <Sidebar />
          <div className='flex-1 flex flex-col'>
            <Navbar />
            <main className='flex-1 p-4'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/market' element={<Market />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/trade' element={<Trade />} />
                <Route path='/reports' element={<Reports />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App