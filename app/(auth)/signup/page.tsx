import React from 'react';

export const Signup = () => { // Changed from 'signup' to 'Signup'
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Sign-Up</h2>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor="first-name">First Name</label>
          <input
            type="text"
            id='first-name'
            placeholder='Enter Your First Name'
            className='border border-gray-300 p-2 w-full rounded' required 
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor="last-name">Last Name</label>
          <input 
            type="text"
            id='last-name' // Corrected ID
            placeholder='Enter your Last Name'
            className='border border-gray-300 p-2 w-full rounded' required 
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor="email">Email or Number</label>
          <input 
            type="email"
            id='email'
            placeholder='Enter your Email or Number'
            className='border border-gray-300 p-2 w-full rounded' required 
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor="password">Password</label>
          <input 
            type="password"
            id='password'
            placeholder='Enter Your Password'
            className='border border-gray-300 p-2 w-full rounded'
            required 
          />
        </div> 
        
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200'>
          Sign Up {/* Changed from "Log In" to "Sign Up" */}
        </button>

        <p className='mt-4 text-center'>
          Already have an account?
          <a href="/login" className='text-blue-500 hover:underline'> Log In</a> {/* Updated link text for clarity */}
        </p>
      </form>
    </div>
  );
};

export default Signup; // Changed from 'signup' to 'Signup'




