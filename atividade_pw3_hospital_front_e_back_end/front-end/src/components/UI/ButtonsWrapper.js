import React from 'react';
import Button from './Button';
import InfoFieldWrapper from './InfoFieldWrapper';

const ButtonsWrapper = ({ onShowForm, onShowOptions }) => {
   return (
      <InfoFieldWrapper>
         <div className='mt-6 flex justify-between '>
            <Button
               onClick={onShowOptions}
               btnStyles={'bg-tertiary hover:bg-tertiary100 px-10'}
            >
               Opções
            </Button>
            <Button
               onClick={onShowForm}
               btnStyles={
                  'bg-transparent text-danger border-transparent hover:border-danger hover:bg-transparent'
               }
            >
               Voltar
            </Button>
         </div>
      </InfoFieldWrapper>
   );
};

export default ButtonsWrapper;
