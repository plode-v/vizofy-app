'use client'
import React, { useState } from 'react'
import axios from 'axios';


const Page = () => {
  
  const [shopifyName, setShopifyName] = useState<string>('');

  const handleChange = (evt: any) => {
    setShopifyName(evt.target.value);
  }

  const handleSubmit = () => {
    console.log(shopifyName);
    alert(shopifyName)
  }

  return (
    <div className='w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input type="text" placeholder='shopify store name here' onChange={(evt) => setShopifyName(evt.target.value)} value={shopifyName} className='text-black' />
        <button>enter</button>
      </form>
    </div>
  )
}

export default Page