import React from 'react';
import Button from './Button';
import InfoFieldWrapper from './InfoFieldWrapper';

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const ButtonsWrapper = ({ onShowForm, onShowOptions }) => {
   const dispatch = useDispatch();

   function toggleFormHandler() {
      dispatch(uiActions.toggle());
   }
   function toggleOptionsScreenHandler() {
      dispatch(uiActions.toggleFormOptions());
   }
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
