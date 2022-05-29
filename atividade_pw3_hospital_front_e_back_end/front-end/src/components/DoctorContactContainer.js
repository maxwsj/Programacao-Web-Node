import React from 'react';

const DoctorContactContainer = ({
   doctorEmail,
   doctorTelephone,
   doctorCellphone,
}) => {
   return (
      <div className='flex flex-row w-full justify-between px-3 mb-5'>
         <div className='flex flex-col '>
            <span className='text-sm'>Email:</span>
            <span className='text-base text-primary break-all'>
               {doctorEmail}
            </span>
         </div>
         <div className='flex flex-col mx-3'>
            <span className='text-sm'>Telefone:</span>
            <span className='text-base text-primary'>{doctorTelephone}</span>
         </div>
         <div className='flex flex-col'>
            <span className='text-sm'>Celular:</span>
            <span className='text-base text-primary'>{doctorCellphone}</span>
         </div>
      </div>
   );
};

export default DoctorContactContainer;
