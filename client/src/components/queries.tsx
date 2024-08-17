/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { GET_PRODUCTS, GET_PRODUCTS_TEXT } from "../graphql/query"


const queries = () => {

    const [isOpen, setIsOpen] = useState(false)



    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const toggle = () => {
        
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <div className="w-full flex flex-col items-center select-none">
            <div className=" w-2/3 flex flex-col items-start my-4">
                <div className="text-slate-800 text-4xl font-semibold">
                    Queries
                    <hr className="border border-slate-800 w-full" />
                </div>

            </div>
            <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-col  items-start   w-2/3  mb-3">
                <div onClick={()=>{toggle()}} className='w-full flex flex-row items-center justify-start gap-5 cursor-pointer'>
                    <div className="border-2 border-stone-600 bg-stone-500/30 text-stone-600 py-2 px-4 rounded-md font-semibold">Read</div>
                    <div className=" text-stone-700 font-bold text-lg">getProducts</div>
                    <div className="text-stone-700 font-light">- List all products</div>
                </div>
                <div className={`${isOpen ? "h-[500px]  my-2 " : "h-0"} overflow-hidden w-full transition-all duration-300 ease-in-out` }>
                    <hr className="border border-slate-800/50 w-full" />
                    <div className='flex flex-row items-center px-4 py-5 w-full h-full'>
                        <div className='w-1/2 h-full '>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Query

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <pre><code>{GET_PRODUCTS_TEXT}</code></pre>
                        </div>
                        <hr className="border-r-2 border-slate-800/50 h-full" />
                        <div className='w-1/2 h-full'>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1">
                                    Result

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <div className='w-full h-[420px] overflow-y-scroll m-2'>
                                <pre>{JSON.stringify(data.getProducts, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-row  items-center justify-start gap-5 w-2/3 cursor-pointer mb-3">
                <div className="border-2 border-stone-600 bg-stone-500/30 text-stone-600 py-2 px-4 rounded-md font-semibold">Read</div>
                <div className=" text-stone-700 font-bold text-lg">getProduct</div>
                <div className="text-stone-700 font-light">- List product by ID</div>
            </div>

        </div>
    )
}

export default queries