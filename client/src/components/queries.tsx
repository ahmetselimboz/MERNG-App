/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_TEXT } from "../graphql/query"


const queries = () => {

    const [isOpen, setIsOpen] = useState({
        firstDiv: false,
        secondDiv: false,
    })

    const [selectedId, setSelectedId] = useState("$productId")

    const { loading: loadingProducts, error: errorProducts, data: dataProducts,refetch  } = useQuery(GET_PRODUCTS);
    const [getProduct, {loading: loadingProduct, error: errorProduct, data: dataProduct}] = useLazyQuery(GET_PRODUCT);



    const toggle = (divName) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [divName]: !prevState[divName],
        }));
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
                <div onClick={() => { toggle('firstDiv') ; refetch()}} className='w-full flex flex-row items-center justify-start gap-5 cursor-pointer'>
                    <div className="border-2 border-stone-600 bg-stone-500/30 text-stone-600 py-2 px-4 rounded-md font-semibold">Read</div>
                    <div className=" text-stone-700 font-bold text-lg">getProducts</div>
                    <div className="text-stone-700 font-light">- List all products</div>
                </div>
                <div className={`${isOpen.firstDiv ? "h-[500px]  my-2 " : "h-0"} overflow-hidden w-full transition-all duration-300 ease-in-out`}>
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
                                {
                                    dataProducts?.getProducts ? (<pre>{JSON.stringify(dataProducts?.getProducts, null, 2)}</pre>):(<pre></pre>)
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-col  items-start   w-2/3  mb-3">
                <div onClick={() => { toggle('secondDiv') }} className='w-full flex flex-row items-center justify-start gap-5 cursor-pointer'>
                    <div className="border-2 border-stone-600 bg-stone-500/30 text-stone-600 py-2 px-4 rounded-md font-semibold">Read</div>
                    <div className=" text-stone-700 font-bold text-lg">getProduct</div>
                    <div className="text-stone-700 font-light">- List product by ID</div>
                </div>
                <div className={`${isOpen.secondDiv ? "h-[500px]  my-2 " : "h-0"} overflow-hidden w-full transition-all duration-300 ease-in-out`}>
                    <hr className="border border-slate-800/50 w-full" />
                    <div className='flex flex-row items-center px-4 py-5 w-full h-full'>
                        <div className='w-1/2 h-full '>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">
                                    Products
                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-5 mt-2 pr-8'>
                                {
                                    dataProducts?.getProducts.map((item, i) => (
                                        <div key={i} onClick={() => { setSelectedId(item.id);getProduct({ variables: { productId: item.id } })}} className='w-fit bg-pink-500 hover:bg-pink-600 transition-all cursor-pointer mb-2 text-white rounded-md py-1.5 px-4'>Product-{i + 1}</div>
                                    ))
                                }

                            </div>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Query

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <pre><code>
                                {
                                `query GetProduct($productId: ID!) {
  getProduct(productId: ${selectedId}) {
    id
    color
    name
    price
  }
}`
}
                            </code></pre>
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
                                <pre>{JSON.stringify(dataProduct?.getProduct, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default queries