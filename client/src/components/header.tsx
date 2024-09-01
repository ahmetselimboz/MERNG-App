import React from 'react'
import { GrGraphQl } from 'react-icons/gr'

const header = () => {
    return (
        <div className="w-full h-[300px] flex lg:flex-row flex-col justify-center lg:items-center items-start gap-5 px-6">
            <div className='flex items-center gap-5'>
                <div className="text-stone-800 font-bold lg:text-7xl text-5xl">CRUD</div>
                <div className="text-stone-700 font-light lg:text-7xl text-5xl">with</div>
            </div>
            <div className="text-pink-500 flex flex-row items-center gap-1 lg:text-7xl text-6xl font-medium"><GrGraphQl className="text-8xl " />GraphQL</div>
        </div>
    )
}

export default header