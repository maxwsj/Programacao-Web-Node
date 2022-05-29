import { useRef, useState } from 'react';
import hospitalService from '../util/http-requests';
import Button from './UI/Button';
import Dropwdown from './UI/Dropdown';
import InfoFieldWrapper from './UI/InfoFieldWrapper';

const EditSpecialty = ({ onHide }) => {
   const specialtyRef = useRef();
   const [selectedItem, setSelectedItem] = useState('');

   const specialtyEditHandler = async (e) => {
      e.preventDefault();
      const enteredSpecialty = specialtyRef.current.value;
      const specialtyData = {
         id: selectedItem.toString(),
         nome_especialidade: enteredSpecialty,
      };
      specialtyRef.current.value = '';

      console.log(specialtyData);
      hospitalService.editSpecialty(specialtyData);
      onHide();
   };

   function selectItemHandler(selectedData) {
      setSelectedItem(selectedData);
   }
   return (
      <div className='flex flex-row w-full justify-between'>
         <div className='flex flex-col w-96 items-center'>
            <InfoFieldWrapper>
               <form action='' onSubmit={specialtyEditHandler}>
                  <Dropwdown
                     labelTitle='Selecione a especialidade a ser alterada'
                     onSelectData={selectItemHandler}
                  />
                  <label
                     className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                     htmlFor='grid-last-name'
                  >
                     Nova especialidade
                  </label>
                  <input
                     className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='grid-last-name'
                     type='text'
                     placeholder='Insira a especialidade'
                     ref={specialtyRef}
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

export default EditSpecialty;
