import React from 'react';

const Input = ({ inputTitle, inputPlaceholder }) => {
   return (
      <>
         <label
            className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
            htmlFor='grid-last-name'
         >
            {inputTitle}
         </label>
         <input
            className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-last-name'
            type='text'
            placeholder={inputPlaceholder}
         />
      </>
   );
};

export default Input;
