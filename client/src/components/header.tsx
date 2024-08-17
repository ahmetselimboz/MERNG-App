import React from 'react'
import { GrGraphQl } from 'react-icons/gr'

const header = () => {
    return (
        <div className="w-full h-[300px] flex flex-row justify-center items-center gap-5">
            <div className="text-stone-800 font-bold text-7xl">CRUD</div>
            <div className="text-stone-700 font-light text-7xl">with</div>
            <div className="text-pink-500 flex flex-row items-center gap-1 text-7xl font-medium"><GrGraphQl className="text-8xl " />GraphQL</div>
        </div>
    )
}

export default header