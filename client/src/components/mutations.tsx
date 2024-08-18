/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'

import { CREATE_PRODUCT, UPDATE_PRODUCT, UPDATE_PRODUCT_TEXT } from '../graphql/mutation';
import { GET_PRODUCT, GET_PRODUCTS } from '../graphql/query';

const mutations = () => {

    const [isOpen, setIsOpen] = useState({
        firstDiv: false,
        secondDiv: false,
        thirdDiv: false
    })
    const [selectedId, setSelectedId] = useState("")
    const [inputUp, setInputUp] = useState({ name: "", price: "", color: "", id:"" })
    const [input, setInput] = useState({ name: "", price: "", color: "" })
    const { loading: loadingProducts, error: errorProducts, data: dataProducts, refetch } = useQuery(GET_PRODUCTS);
    const [createProduct, { loading: loadingCreate, error: errorCreate, data: dataCreate }] = useMutation(CREATE_PRODUCT);
    const [updateProduct, { loading: loadingUpdate, error: errorUpdate, data: dataUpdate }] = useMutation(UPDATE_PRODUCT);
    const [getProduct, { loading: loadingProduct, error: errorProduct, data: dataProduct }] = useLazyQuery(GET_PRODUCT);


    const toggle = (divName) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [divName]: !prevState[divName],
        }));
    }

    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        setInputUp({ ...inputUp, [e.target.name]: e.target.value })
    }

    const updateFunc = () => {
        console.log(inputUp);
        inputUp.id = selectedId
        updateProduct({ variables: { body: inputUp } });
        refetch();
        setInputUp({ name: "", price: "", color: "",id:"" })
    }


    return (
        <div className="w-full flex flex-col items-center">
            <div className=" w-2/3 flex flex-col items-start my-4">
                <div className="text-slate-800 text-4xl font-semibold">
                    Mutations
                    <hr className="border border-slate-800 w-full" />
                </div>

            </div>
            <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-col  items-start   w-2/3  mb-3">
                <div onClick={() => { toggle('firstDiv') }} className='w-full flex flex-row items-center justify-start gap-5 cursor-pointer'>
                    <div className="border-2  border-blue-600 bg-blue-500/30 text-blue-600 py-2 px-4 rounded-md font-semibold">Create</div>
                    <div className=" text-stone-700 font-bold text-lg">createProduct</div>
                    <div className="text-stone-700 font-light">- Create product</div>
                </div>
                <div className={`${isOpen.firstDiv ? "h-[500px]  my-2 " : "h-0"} overflow-hidden w-full transition-all duration-300 ease-in-out`}>
                    <hr className="border border-slate-800/50 w-full" />
                    <div className='flex flex-row items-center px-4 py-5 w-full h-full'>
                        <div className='w-1/2 h-full '>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Create Product

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <div className='w-full flex flex-col items-center justify-center gap-3 my-2'>
                                <div className='flex flex-col items-start justify-center gap-2 w-2/3'>

                                    <input value={input.name} onChange={onChange} name='name' id='name' type="text" placeholder='Name' className='w-full  rounded-md outline-none border border-stone-500 py-1 px-3' />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-2 w-2/3'>

                                    <input value={input.price} onChange={onChange} name='price' id='price' type="text" placeholder='Price' className='w-full  rounded-md outline-none border border-stone-500 py-1 px-3' />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-2 w-2/3'>

                                    <input value={input.color} onChange={onChange} name='color' id='color' type="text" placeholder='Color' className='w-full rounded-md outline-none border border-stone-500 py-1 px-3' />
                                </div>

                                <button onClick={() => { createProduct({ variables: { body: input } }); refetch(); setInput({ name: "", price: "", color: "" }) }} className='text-white px-4 py-2 rounded-md bg-pink-500 hover:bg-pink-600 transition-all'>Create</button>
                            </div>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Query

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <pre><code>
                                {
                                    `
  mutation CreateProduct($body: Input!) {
    createProduct(body: $body) {
      color
      name
      price
    }
  }
`
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
                                <pre>{JSON.stringify(dataProducts?.getProducts, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-col  items-start   w-2/3  mb-3">
                <div onClick={() => { toggle('secondDiv'); }} className='w-full flex flex-row items-center justify-start gap-5 cursor-pointer'>
                    <div className="border-2 border-green-600 bg-green-500/30 text-green-600 py-2 px-4 rounded-md font-semibold">Update</div>
                    <div className=" text-stone-700 font-bold text-lg">updateProduct</div>
                    <div className="text-stone-700 font-light">- Update product by ID</div>
                </div>
                <div className={`${isOpen.secondDiv ? "h-[500px]  my-2 " : "h-0"} overflow-hidden w-full transition-all duration-300 ease-in-out`}>
                    <hr className="border border-slate-800/50 w-full" />
                    <div className='flex flex-row items-center px-4 py-5 w-full h-full'>
                        <div className='w-1/2  h-[420px] overflow-y-scroll'>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">
                                    Products
                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-5 mt-2 pr-8'>
                                {
                                    dataProducts?.getProducts.map((item, i) => (
                                        <div key={i} onClick={() => { setSelectedId(item.id); getProduct({ variables: { productId: item.id } }); dataProduct?.getProduct !== undefined ? setInputUp({ name: dataProduct?.getProduct.name , price: dataProduct?.getProduct.price, color:  dataProduct?.getProduct.color, id:"" }) : setInputUp({ name: "", price: "", color: "", id:"" }) }} className='w-fit bg-pink-500 hover:bg-pink-600 transition-all cursor-pointer mb-2 text-white rounded-md py-1.5 px-4'>Product-{i + 1}</div>
                                    ))
                                }

                            </div>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Update Product

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <div className='w-full flex flex-col items-center justify-center gap-3 my-2'>
                                <div className='flex flex-col items-start justify-center gap-2 w-2/3'>

                                    <input value={inputUp.name} onChange={onChange} name='name' id='name' type="text" placeholder='Name' className='w-full  rounded-md outline-none border border-stone-500 py-1 px-3' />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-2 w-2/3'>

                                    <input value={inputUp.price} onChange={onChange} name='price' id='price' type="text" placeholder='Price' className='w-full  rounded-md outline-none border border-stone-500 py-1 px-3' />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-2 w-2/3'>

                                    <input value={inputUp.color} onChange={onChange} name='color' id='color' type="text" placeholder='Color' className='w-full rounded-md outline-none border border-stone-500 py-1 px-3' />
                                    {/* <input value={inputUp.id} onChange={onChange} name='id' id='id' type="hidden" placeholder='id' className='w-full rounded-md outline-none border border-stone-500 py-1 px-3' /> */}
                                    
                                </div>

                                <button onClick={() => { updateFunc() }} className='text-white px-4 py-2 rounded-md bg-pink-500 hover:bg-pink-600 transition-all'>Update</button>
                            </div>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Query

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <pre><code>{UPDATE_PRODUCT_TEXT}</code></pre>
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
                                {/* <pre>{JSON.stringify(dataProducts.getProducts, null, 2)}</pre> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 border-stone-500 hover:border-stone-700 transition-all rounded-md py-2 px-4 flex flex-col  items-start   w-2/3  mb-3">
                <div onClick={() => { toggle('thirdDiv') }} className='w-full flex flex-row items-center justify-start gap-5 cursor-pointer'>
                    <div className="border-2 border-red-600 bg-red-500/30 text-red-600 py-2 px-4 rounded-md font-semibold">Delete</div>
                    <div className=" text-stone-700 font-bold text-lg">deleteProduct</div>
                    <div className="text-stone-700 font-light">- Delete product by ID</div>
                </div>
                <div className={`${isOpen.thirdDiv ? "h-[500px]  my-2 " : "h-0"} overflow-hidden w-full transition-all duration-300 ease-in-out`}>
                    <hr className="border border-slate-800/50 w-full" />
                    <div className='flex flex-row items-center px-4 py-5 w-full h-full'>
                        <div className='w-1/2 h-full '>
                            <div className=" w-full flex flex-col items-center pr-4">
                                <div className="text-pink-500 text-2xl font-medium tracking-wider my-1 flex flex-row items-center gap-2">

                                    Query

                                </div>
                                <hr className="border border-pink-500 w-2/3" />
                            </div>
                            <pre><code></code></pre>
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
                                {/* <pre>{JSON.stringify(dataProducts.getProducts, null, 2)}</pre> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default mutations