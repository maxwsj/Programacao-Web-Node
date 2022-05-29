import { useRef, useState } from 'react';
import hospitalService from '../util/http-requests';
import Button from './UI/Button';
import Dropwdown from './UI/Dropdown';
import InfoFieldWrapper from './UI/InfoFieldWrapper';

const DoctorRegisterForm = ({ onHide, doctorId, onUpdate }) => {
   const doctorNameRef = useRef();
   const doctorEmailRef = useRef();
   const doctorTelephoneRef = useRef();
   const doctorCellphoneRef = useRef();

   const [selectedItem, setSelectedItem] = useState('');
   const [doctorData, setDoctorData] = useState({});

   const doctorRegisterHandler = async (e) => {
      e.preventDefault();
      const enteredName = doctorNameRef.current.value;
      const enteredEmail = doctorEmailRef.current.value;
      const enteredTelephone = doctorTelephoneRef.current.value;
      const enteredCellphone = doctorCellphoneRef.current.value;
      const doctorData = {
         id: doctorId.toString(),
         nome_medico: enteredName,
         email_medico: enteredEmail,
         telefone_medico: enteredTelephone,
         celular_medico: enteredCellphone,
         tblEspecialidadeId: selectedItem.toString(),
      };
      setDoctorData(doctorData);
      doctorNameRef.current.value = '';
      doctorEmailRef.current.value = '';
      doctorTelephoneRef.current.value = '';
      doctorCellphoneRef.current.value = '';

      console.log(doctorData);

      hospitalService.editDoctor(doctorData);

      setTimeout(() => {
         onUpdate();
      }, '1000');

      setTimeout(() => {
         onHide();
      }, '1000');
   };

   function selectItemIdHandler(selectedData) {
      setSelectedItem(selectedData);
   }

   return (
      <div className='flex flex-row w-full justify-between'>
         <div className='flex flex-col w-96 items-center'>
            <InfoFieldWrapper>
               <form action='' onSubmit={doctorRegisterHandler}>
                  <label
                     className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                     htmlFor='grid-last-name'
                  >
                     Nome do médico
                  </label>
                  <input
                     className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='grid-last-name'
                     type='text'
                     placeholder='Insira um nome'
                     ref={doctorNameRef}
                  />

                  <label
                     className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                     htmlFor='grid-last-name'
                  >
                     Email do Médico
                  </label>
                  <input
                     className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='grid-last-name'
                     type='text'
                     placeholder='Insira um email'
                     ref={doctorEmailRef}
                  />

                  <label
                     className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                     htmlFor='grid-last-name'
                  >
                     Telefone do Médico
                  </label>
                  <input
                     className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='grid-last-name'
                     type='text'
                     placeholder='Insira um telefone'
                     ref={doctorTelephoneRef}
                  />

                  <label
                     className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                     htmlFor='grid-last-name'
                  >
                     Celular do Médico
                  </label>
                  <input
                     className='appearance-none block w-full bg-quartiary text-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='grid-last-name'
                     type='text'
                     placeholder='Insira um celular'
                     ref={doctorCellphoneRef}
                  />

                  <Dropwdown
                     labelTitle='Selecione uma Especialidade'
                     onSelectData={selectItemIdHandler}
                  />
                  <div className='mt-6 flex justify-between '>
                     <Button
                        btnStyles={'bg-tertiary hover:bg-tertiary100'}
                        type={'submit'}
                     >
                        Confirmar
                     </Button>
                     <Button
                        onClick={onHide}
                        btnStyles={
                           'bg-transparent text-danger border-transparent hover:border-danger hover:bg-transparent'
                        }
                        type={'button'}
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

export default DoctorRegisterForm;
