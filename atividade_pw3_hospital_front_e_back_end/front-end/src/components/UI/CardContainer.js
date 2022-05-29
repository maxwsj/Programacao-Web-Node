import React from 'react';

const CardContainer = ({ children, cardTitle }) => {
   return (
      <>
         <div className='bg-seconday rounded-xl w-min h-min my-10'>
            <h1 className='text-quartiary text-2xl text-center my-4'>
               {cardTitle}
            </h1>
            <div className='justify-center items-center flex flex-wrap'>
               {children}
            </div>
         </div>
      </>
   );
};

export default CardContainer;
