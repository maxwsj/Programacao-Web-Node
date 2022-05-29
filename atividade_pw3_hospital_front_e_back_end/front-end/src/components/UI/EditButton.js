import React from 'react';

const EditButton = ({ onClick, doctorId }) => {
   return (
      <button
         id={doctorId}
         onClick={onClick}
         className='btn btn-accent bg-tertiary text-quartiary hover:bg-tertiary100 
         btn-sm'
      >
         Editar
      </button>
   );
};

export default EditButton;
