import React from 'react'

const Loading = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
      <p className="text-gray-700 text-lg font-semibold">Set no limit</p>

      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
    </>
  )
}

export default Loading