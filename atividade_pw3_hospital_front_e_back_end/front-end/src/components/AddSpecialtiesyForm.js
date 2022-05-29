import { useRef } from 'react';
import hospitalService from '../util/http-requests';
import Button from './UI/Button';
import InfoFieldWrapper from './UI/InfoFieldWrapper';
const AddSpecialtiesyForm = ({ onHide }) => {
   const specialtiesy = useRef();

   async function specialtiesyInputHandler(e) {
      e.preventDefault();
      const specialtiesyValue = {
         nome_especialidade: specialtiesy.current.value,
      };
      hospitalService.addSpecialities(specialtiesyValue);

      specialtiesy.current.value = '';
      onHide();
   }

   return (
      <div className='flex flex-row w-full justify-between'>
         <div className='flex flex-col w-96 items-center'>
            <InfoFieldWrapper>
               <form action='' onSubmit={specialtiesyInputHandler}>
                  <label
                     className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                     htmlFor='grid-last-name'
                  >
                     Nome da Especialidade
                  </label>
                  <input
                     className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='grid-last-name'
                     type='text'
                     placeholder='Insira o nome da especialidade'
                     ref={specialtiesy}
                  />

                  <div className='mt-6 flex justify-between '>
                     <Button
                        btnStyles={'bg-tertiary hover:bg-tertiary100'}
                        type={'submit'}
                     >
                        Confirmar
                     </Button>
                     <Button
                        type={'button'}
                        onClick={onHide}
                        btnStyles={
                           'bg-transparent text-danger border-transparent hover:border-danger hover:bg-transparent'
                        }
                     >
                        Voltar
                     </Button>
                  </div>
               </form>
            </InfoFieldWrapper>
         </div>
      </div>
   );
};

export default AddSpecialtiesyForm;
