import React from 'react'
import { MdCopyright } from 'react-icons/md'

const footer = () => {
    return (
        <div className="w-full p-4 bg-pink-500 flex items-center justify-center gap-2 text-white text-lg popping-regular tracking-wider select-none">
            ASB <MdCopyright /> {new Date().getFullYear()}
        </div>
    )
}

export default footer