import React, { useState } from 'react';
import Button from '../components/UI/Button';
import CardContainer from '../components/UI/CardContainer';
import InfoFieldWrapper from '../components/UI/InfoFieldWrapper';
import AddDoctorForm from '../components/AddDoctorForm';
import AddSpecialtiesyForm from '../components/AddSpecialtiesyForm';

const RegisterOptions = ({ onEditSpecialties, onHideRegister, onUpdate }) => {
   const [showRegisterOptions, setShowRegisterOptions] = useState(true);
   const [showSpecialtyForm, setShowSpecialtyForm] = useState(false);
   const [showDoctorForm, SetShowDoctorForm] = useState(false);

   function showSpecialtyFormHandler() {
      setShowSpecialtyForm(true);
      setShowRegisterOptions(false);
   }

   function showDoctorFormHandler() {
      SetShowDoctorForm(true);
      setShowRegisterOptions(false);
   }

   function hideDoctorFormHandler() {
      SetShowDoctorForm(false);
      setShowRegisterOptions(true);
   }

   function hideSpecialtyFormHandler() {
      setShowSpecialtyForm(false);
      setShowRegisterOptions(true);
   }

   return (
      <>
         (
         {showRegisterOptions && (
            <CardContainer cardTitle='Opções de cadastro'>
               <div className='flex flex-row w-full justify-between'>
                  <div className='flex flex-col w-96 items-center'>
                     <InfoFieldWrapper>
                        <label
                           className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                           htmlFor='grid-last-name'
                        >
                           Cadastrar uma Especialidade
                        </label>
                        <Button
                           btnStyles={'bg-tertiary hover:bg-tertiary100'}
                           onClick={showSpecialtyFormHandler}
                        >
                           Selecionar
                        </Button>
                        <label
                           className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                           htmlFor='grid-last-name'
                        >
                           Cadastrar um Médico
                        </label>
                        <Button
                           btnStyles={'bg-tertiary hover:bg-tertiary100'}
                           onClick={showDoctorFormHandler}
                        >
                           Selecionar
                        </Button>

                        <label
                           className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
                           htmlFor='grid-last-name'
                        >
                           Editar uma Especialidade
                        </label>
                        <Button
                           btnStyles={'bg-tertiary hover:bg-tertiary100'}
                           onClick={onEditSpecialties}
                        >
                           Selecionar
                        </Button>
                        <div className='mt-6 flex justify-end'>
                           <Button
                              onClick={onHideRegister}
                              btnStyles={
                                 'bg-transparent text-danger border-transparent hover:border-danger hover:bg-transparent'
                              }
                           >
                              Voltar
                           </Button>
                        </div>
                     </InfoFieldWrapper>
                  </div>
               </div>
            </CardContainer>
         )}
         {showSpecialtyForm && (
            <CardContainer cardTitle='Cadastrar Especialidade'>
               <AddSpecialtiesyForm onHide={hideSpecialtyFormHandler} />
            </CardContainer>
         )}
         {showDoctorForm && (
            <CardContainer cardTitle='Cadastrar um médico'>
               <AddDoctorForm
                  onHide={hideDoctorFormHandler}
                  onUpdate={onUpdate}
               />
            </CardContainer>
         )}
         )
      </>
   );
};

export default RegisterOptions;
