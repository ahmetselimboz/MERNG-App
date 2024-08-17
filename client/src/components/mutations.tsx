import React from 'react'

const mutations = () => {
  return (
    <div className="w-full flex flex-col items-center">
    <div className=" w-2/3 flex flex-col items-start my-4">
      <div className="text-slate-800 text-4xl font-semibold">
        Mutations
        <hr className="border border-slate-800 w-full"/>
      </div>
     
    </div>
    <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-row  items-center justify-start gap-5 w-2/3 cursor-pointer mb-3">
      <div className="border-2 border-blue-600 bg-blue-500/30 text-blue-600 py-2 px-4 rounded-md font-semibold">Create</div>
      <div className=" text-stone-700 font-bold text-lg">createProduct</div>
      <div className="text-stone-700 font-light">- Create product</div>
    </div>
    <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-row  items-center justify-start gap-5 w-2/3 cursor-pointer mb-3">
      <div className="border-2 border-green-600 bg-green-500/30 text-green-600 py-2 px-4 rounded-md font-semibold">Update</div>
      <div className=" text-stone-700 font-bold text-lg">updateProduct</div>
      <div className="text-stone-700 font-light">- Update product by ID</div>
    </div>
    <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-row  items-center justify-start gap-5 w-2/3 cursor-pointer mb-3">
      <div className="border-2 border-red-600 bg-red-500/30 text-red-600 py-2 px-4 rounded-md font-semibold">Delete</div>
      <div className=" text-stone-700 font-bold text-lg">deleteProduct</div>
      <div className="text-stone-700 font-light">- Delete product by ID</div>
    </div>
  </div>
  )
}

export default mutations