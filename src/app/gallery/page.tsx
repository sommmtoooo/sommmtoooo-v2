import React from 'react'

export default function page() {
  return (
    <section>
      <div className='mb-16 text-3xl font-bold'>Gallery</div>
      <div className='grid grid-cols-12 auto-rows-[400px] gap-4'>
        <div className='col-span-3 border-[1px] border-neutral-500 shadow-sm   rounded-md cursor-pointer'></div>
        <div className='col-span-4 border-[1px] border-neutral-500 shadow-sm   rounded-md cursor-pointer'></div>
        <div className='col-span-5 row-span-2 border-[1px] border-neutral-500 shadow-sm   rounded-md cursor-pointer'></div>
        <div className='col-span-7 border-[1px] border-neutral-500 shadow-sm   rounded-md cursor-pointer'></div>
        <div className='col-span-5 border-[1px] border-neutral-500 shadow-sm   rounded-md cursor-pointer'></div>
        <div className='col-span-7 border-[1px] border-neutral-500 shadow-sm   rounded-md cursor-pointer'></div>
      </div>
    </section>
  )
}
