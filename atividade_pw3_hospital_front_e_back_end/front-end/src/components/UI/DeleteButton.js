import React from 'react';

const DeleteButton = ({ doctorId, onClick }) => {
   return (
      <button
         id={doctorId}
         className='btn btn-sm bg-quartiary text-danger border-transparent hover:border-danger hover:bg-transparent '
         onClick={onClick}
      >
         Excluir
      </button>
   );
};

export default DeleteButton;
