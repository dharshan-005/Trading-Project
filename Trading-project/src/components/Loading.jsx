import React from 'react'

const Loading = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="loader ease-linear rounded-full  h-16 w-16 mb-4"></div>
      <p className="text-gray-700 text-lg font-semibold p-text">Set no limit</p>

      <style jsx>{`
        .loader {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        .p-text {
          color: #000;
          font-size: 20px;
          animation: text 3s ease-in-out infinite;
        }

        @keyframes text {
          50%{
          color: #fff;
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg);box-shadow: 1px  5px 2px #0033cc}
          50% { transform: rotate(180deg);box-shadow: 1px  5px 2px #90CDF4}
          100% { transform: rotate(360deg);box-shadow: 1px  5px 2px #99b3ff}
        }
      `}</style>
    </div>
    </>
  )
}

export default Loading