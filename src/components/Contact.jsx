import React from 'react';
import Title from './Title';

function Contact() {
  return(
    <>
    
    <div className='flex flex-col mt-20 mb-10 mx-auto'>
    <div className='text-center'><Title>Contact</Title></div>
      <div className='flex justify-center items-center'>
        <form action='https://getform.io/f/allljdla' method='POST' className='flex flex-col w-full md:w-7/12'>
        <input type='text' name='name' placeholder='Name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
        <input type='text' name='email' placeholder='Email' className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
        <input type='text' name='message'placeholder='Write a message...' className='h-20 border-2 p-1 mb-4 bg-transparent rounded-md focus:outline-none'/>
        <button type='submit' className='submit-button text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md'>Work With Me</button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Contact;