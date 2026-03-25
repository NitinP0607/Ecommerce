import React from 'react'

const NewsletterBox = () => {

    const onsubmitHandler =(event)=>{
        event.preventDefault(); 

    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now and get 20% Off
      </p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla accusantium, enim asperiores labore quibusdam rem?
      </p>
      <form onSubmit={onsubmitHandler} className='w-3/4 sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='enter your email' className='w-full flex-1 outline-none' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}
export default NewsletterBox
