import * as React from 'react';

export default function Form( ) {
    return (
        <div className='bg-white px-10 py-20 rounder-3xl border-2 border-gray-200'>
      
            <h1 className='text-5xl font-semibold'>welcome back </h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>welcome back !please entervyour details.</p>
       <div className='mt-8'>
        <div>
            <label className='text-lg font-medium'>
                Email
            </label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='enter your email' />
        </div>
        <div>
            <label className='text-lg font-medium'>
                Password
            </label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='enter your password'
            type="password"/>
        </div>
<div className='mt-8 flex justify-betwenn items-center'>
    <div>
        <input
        type="checkbox"
        id="remember"
        />
        <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
        </div>
        <button className='font-medium text-base text-violet-600'>forget password</button>
    
</div>
<div className='mt-8 flex  flex-col gap-y-4'>
<button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3  rounded-xl bg-violet-500 text-white text-lg font-bold'>sign in</button>
<button>sign in with google</button>

    </div>
    <div className='mt-8 flex  justify-center items-center'>
        <p className='font-medium text-base'>Don't have account?</p>
        <button className='text-violet-500 text-base font-medium ml-2'>sign up</button>
    </div>
     </div>
     </div>
    )
}