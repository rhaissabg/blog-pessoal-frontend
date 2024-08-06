// import React from 'react'

function Grid() {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-[1000px] mx-auto my-8">

        <div className="col-span-2 bg-blue-500 h-[54px] p-4">
            Container 1
        </div>

        <div className="bg-red-600 h-[54px] p-4">
            Container 2
        </div>

        <div className="bg-yellow-400 h-[54px] p-4">
            Container 3
        </div>

        <div className="col-span-2 bg-green-500 h-[54px] p-4">
            Container 4
        </div>

    </div>
  )
}

export default Grid