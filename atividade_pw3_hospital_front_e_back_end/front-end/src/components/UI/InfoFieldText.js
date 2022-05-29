import React from 'react';

const InfoFieldText = ({ infoTextTitle, infoTextData }) => {
   return (
      <>
         <label
            className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
            htmlFor='grid-last-name'
         >
            {infoTextTitle}
         </label>
         <span className='text-xl font-semibold bg-quartiary rounded text-primary pl-2 h-full py-2'>
            {infoTextData}
         </span>
      </>
   );
};

export default InfoFieldText;
